import path from 'path';

const getImagePath = (image) => {
    // Use an absolute path that resolves correctly in both local and Vercel environments
    return path.join(__dirname, '..', 'public', 'uploads', image); // Adjust based on your structure
}

export { getImagePath }
