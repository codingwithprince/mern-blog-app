import postModel from "../model/postModel.js";
import userModel from "../model/userModel.js"
import bcrypt from 'bcrypt'

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
        res.send('uploaded')
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
        res.send(res)
    } catch (error) {
      console.log(error);
    }
  }

  static deletePost = async(req, res) => {
    try {
        const result = await postModel.findByIdAndDelete(req.params.id)
        res.send('Deleted')
    } catch (error) {
      console.log(error);
    }
  }

  static getUser = async(req, res) => {
    try {
      const result = await userModel.find()
      res.send(result)
    } catch (error) {
      console.log(error);
    }
  }

}

export default mainController;
