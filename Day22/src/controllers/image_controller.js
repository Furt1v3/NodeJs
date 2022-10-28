const deleteFile = require('../utils');
const { Image } = require('../models/images');

module.exports = creatImage = async (req, res, _next) => {
  try {
    let profile = req.body.profileImage;
    console.log(profile);
    if ( req.file ) {
      profile = req.file.path.replace('\\','/');
      console.log(profile);
    }
    const fileUpload = {
      profile : profile
    }
    const upload = new Image(fileUpload);
    const result = await upload.save();
    res.status(200).json({msg : "Image upload Successfully!!", data : result, status: 1});
  } catch (err) {
    res.send("An Error occured in creatImage");
    console.log(err)
  }
};

module.exports = editImage = async (req, res, _next) => {
  try {
   const img = await Image.findById(req.params.id);
   let profile = req.body.profileImage;
   if (req.file) {
    profile = req.file.path.replace('\\','/');
   }
   if (img.profile && img.profile != profile) {
    deleteFile(img.profile);
   }
   img.profile = profile ;
   const result = await img.save();
   res.json ({msg : "Image Updated Successfully", data: result});
  } catch (err) {
    res.send("an error occured in editImage");
    console.log(err)
  }
};