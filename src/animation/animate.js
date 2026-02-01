export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
    }
  }
}
export const containerVariants = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            delay:0.6,
            staggerChildren: 0.4
        }
    }
}
