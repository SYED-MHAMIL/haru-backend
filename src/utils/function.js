const getImagePath = (image) => {
   
    return path.join("uploads", image)
}

export { getImagePath }