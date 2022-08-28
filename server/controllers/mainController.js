import postModel from "../model/postModel.js";

class mainController {
  static home = async (req, res) => {
    try {
      const result = await postModel.find();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };

  static upload = async(req, res) => {
    try {
        const doc = postModel(req.body)
        await doc.save()
    } catch (error) {
        console.log(error);
    }
  }

  static getUpdate = async(req, res) => {
    try {
        const result = await postModel.findById(req.params.id)
        res.send(result)
    } catch (error) {
      console.log(error);
    }
  }

  static putUpdate = async(req, res) => {
    try {
        const result = await postModel.findByIdAndUpdate(req.params.id, req.body)
        res.send(result)
        console.log('Updated');
    } catch (error) {
      console.log(error);
    }
  }

  static deletePost = async(req, res) => {
    try {
        const result = await postModel.findByIdAndDelete(req.params.id)
        console.log('Deleted..');
    } catch (error) {
      console.log(error);
    }
  }
}

export default mainController;
