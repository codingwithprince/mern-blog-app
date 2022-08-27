import postModel from "../model/postModel.js"

class mainController{
    static home = async (req, res) => {
        try {
            const result = await postModel.find()
            res.send(result)
        } catch (error) {
            console.log(error);
        }
      
    }
}


export default mainController