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

  static getUser = async(req, res) => {
    try {
      const result = await userModel.find()
      res.send(result)
    } catch (error) {
      console.log(error);
    }
  }

  static userVerify = async(req, res) => {
    try {
        const result = await userModel.find()
        const isMatched = await bcrypt.compare(req.body.password, result[0].password)
        if(req.body.email == result[0].email &&  isMatched ){
          res.send({
            admin: true
          })
        } else {
          res.send(result)
        }
        
    } catch (error) {
      console.log(error);
    }
  }
}

export default mainController;
