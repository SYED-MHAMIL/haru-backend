
import multer from "multer";


const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}.${file.originalname.split('.').pop()}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 100000000 },
});

export default upload;
