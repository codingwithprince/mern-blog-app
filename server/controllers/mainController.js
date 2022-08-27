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
        // const doc = postModel({
        //     title: 'anime',
        //     writer: 'prince',
        //     poem: 'poem'
        // })
        // await doc.save()
        console.log(req.body);
        res.send(req.body)
    } catch (error) {
        console.log(error);
    }
  }
}

export default mainController;
