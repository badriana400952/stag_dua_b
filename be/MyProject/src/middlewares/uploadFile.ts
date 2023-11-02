// import { NextFunction, Request, Response } from "express";
// import * as multer from "multer"

// export const upload = (fildName: string) => {
//     const storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "./uplads")
//         },
//         filename: function (req, file, cb) {
//             const uniqueSuffix = Date.now()
//             cb(null, file.fieldname + "_" + uniqueSuffix + ".png");

//         }
//     });
//     const uploadFile = multer({ storage: storage })
//     return (req: Request, res: Response, next: NextFunction) => uploadFile.single(fildName)(req, res, function (err) {
//         if (err) {
//             return res.status(400).json({ error: "file upload file" })
//         };
//         res.locals.fillename = req.file.filenamwrappedFileFiltere
//         next();
//     })

// }

import { NextFunction, Request, Response } from "express";
// import * as multer from "multer";
import multer = require("multer")

export const upload = (fieldName: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/"); //folder penyimpnan
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
    },
  });

  const uploadFile = multer({ storage: storage });

  return (req: Request, res: Response, next: NextFunction) => {
    uploadFile.single(fieldName)(req, res, function (err: any) {
      if (err) {
        return res.status(400).json({ error: err });
      }
      //res.locals.filename => filename ny bebas mw apa aja
      res.locals.filename = req.file.filename;
      next();
    });
  };
};