// import React, { useRef, useState, useEffect } from "react";
// import "./Carousel.css";

// const Carousel = ({ children, auto = true, autoplayInterval = 3000 }) => {
//     const trackRef = useRef(null);
//     const containerRef = useRef(null);
//     const shiftRef = useRef(0); // px per 1 card (card width + gap)
//     const [index, setIndex] = useState(0);
//     const [visibleCount, setVisibleCount] = useState(1);
//     const total = React.Children.count(children);

//     // calculate visibleCount and shift per card
//     useEffect(() => {
//         const track = trackRef.current;
//         const container = containerRef.current;
//         if (!track || !container) return;

//         const calc = () => {
//             const first = track.querySelector(":scope > *");
//             if (!first) return;
//             const trackStyle = getComputedStyle(track);
//             const gap = parseFloat(trackStyle.gap) || 30;
//             const cardRect = first.getBoundingClientRect();
//             const cardWidth = Math.round(cardRect.width);
//             const containerWidth = Math.round(container.getBoundingClientRect().width);

//             // how many cards fit (at least 1)
//             const vc = Math.max(1, Math.floor((containerWidth + gap) / (cardWidth + gap)));
//             setVisibleCount(vc);

//             // store px shift per step
//             shiftRef.current = cardWidth + gap;

//             // clamp index to maximum
//             const maxIndex = Math.max(0, total - vc);
//             setIndex((prev) => Math.min(prev, maxIndex));
//         };

//         // initial calc and on resize
//         calc();
//         const ro = new ResizeObserver(calc);
//         ro.observe(container);
//         ro.observe(track);
//         window.addEventListener("resize", calc);

//         return () => {
//             ro.disconnect();
//             window.removeEventListener("resize", calc);
//         };
//     }, [children, total]);

//     // autoplay — only when there are hidden cards
//     useEffect(() => {
//         if (!auto) return;
//         if (total <= visibleCount) return; // nothing to slide

//         const maxIndex = Math.max(0, total - visibleCount);
//         const id = setInterval(() => {
//             setIndex((prev) => {
//                 if (prev >= maxIndex) return 0; // loop back to start (change as desired)
//                 return prev + 1;
//             });
//         }, autoplayInterval);

//         return () => clearInterval(id);
//     }, [auto, autoplayInterval, total, visibleCount]);

//     const prev = () =>
//         setIndex((i) => {
//             const maxIndex = Math.max(0, total - visibleCount);
//             return i <= 0 ? maxIndex : i - 1;
//         });

//     const next = () =>
//         setIndex((i) => {
//             const maxIndex = Math.max(0, total - visibleCount);
//             return i >= maxIndex ? 0 : i + 1;
//         });

    

//     const shiftPx = shiftRef.current || 0;
//     const translateX = -(index * shiftPx);

//     return (
//         <div className="carousel-container" ref={containerRef}>
//             <button className="nav-btn left" onClick={prev} aria-label="Previous">
//                 ‹
//             </button>

//             <div className="carousel-track">
//                 <div
//                     className="carousel-inner"
//                     ref={trackRef}
//                     style={{ transform: `translateX(${translateX}px)` }}
//                 >
//                     {React.Children.map(children, (child, i) => (
//                         // give role/container for each direct child
//                         <div className="carousel-item">{child}</div>
//                     ))}
//                 </div>
//             </div>

//             <button className="nav-btn right" onClick={next} aria-label="Next">
//                 ›
//             </button>
//         </div>
//     );
// };

// export default Carousel;




import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ children, auto = true, autoplayInterval = 3000 }) => {
    const trackRef = useRef(null);
    const containerRef = useRef(null);

    // index starts at 1 because we will add a cloned slide at the start
    const [index, setIndex] = useState(1);
    const [items, setItems] = useState([]);
    const shiftRef = useRef(0);
    const [visibleCount, setVisibleCount] = useState(1);

    // Prepare children with clones
    useEffect(() => {
        const arr = React.Children.toArray(children);
        if (arr.length > 0) {
            const first = React.cloneElement(arr[0], { cloned: true });
            const last = React.cloneElement(arr[arr.length - 1], { cloned: true });

            setItems([last, ...arr, first]);
        }
    }, [children]);

    const total = items.length;

    // Calculate visible count + card width
    useEffect(() => {
        const track = trackRef.current;
        const container = containerRef.current;
        if (!track || !container) return;

        const calc = () => {
            const first = track.querySelector(":scope > *");
            if (!first) return;

            const style = getComputedStyle(track);
            const gap = parseFloat(style.gap) || 30;
            const card = first.getBoundingClientRect();
            shiftRef.current = Math.round(card.width + gap);

            const containW = Math.round(container.getBoundingClientRect().width);
            const vc = Math.max(1, Math.floor((containW + gap) / (card.width + gap)));
            setVisibleCount(vc);
        };

        calc();
        const ro = new ResizeObserver(calc);
        ro.observe(container);
        ro.observe(track);

        return () => ro.disconnect();
    }, [items]);

    // Autoplay
    useEffect(() => {
        if (!auto || items.length <= 2) return;

        const id = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, autoplayInterval);

        return () => clearInterval(id);
    }, [auto, autoplayInterval, items]);

    // Handle infinite loop jumps
    useEffect(() => {
        if (items.length < 3) return;

        const inner = trackRef.current;

        if (index === items.length - 1) {
            // reached the cloned last → jump to real first
            setTimeout(() => {
                inner.style.transition = "none";
                setIndex(1);
            }, 450);
        } else if (index === 0) {
            // reached the cloned first → jump to real last
            setTimeout(() => {
                inner.style.transition = "none";
                setIndex(items.length - 2);
            }, 450);
        }

        // enable animation again
        setTimeout(() => {
            inner.style.transition = "transform 0.45s cubic-bezier(.22, .9, .37, 1)";
        }, 480);
    }, [index, items]);

    const next = () => setIndex((i) => i + 1);
    const prev = () => setIndex((i) => i - 1);

    const translateX = -(index * shiftRef.current);

    return (
        <div className="carousel-container" ref={containerRef}>
            <button className="nav-btn left" onClick={prev}>‹</button>

            <div className="carousel-track">
                <div
                    className="carousel-inner"
                    ref={trackRef}
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {items.map((child, i) => (
                        <div className="carousel-item" key={i}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            <button className="nav-btn right" onClick={next}>›</button>
        </div>
    );
};

export default Carousel;
