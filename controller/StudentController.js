var studentmodel = require('../model/StudentModel');

exports.insert = async(req,res) => {

    const { Maths, Science, English, Hindi, Gujarati } = req.body;
    const totalMarks = parseInt(Maths) + parseInt(Science) + parseInt(English) + parseInt(Hindi) + parseInt(Gujarati);
    const percentage = (totalMarks / 5); 
    const passFail = parseInt(Maths) >= 35 && parseInt(Science) >= 35 && parseInt(English) >= 35 && parseInt(Hindi) >= 35 && parseInt(Gujarati) >= 35  ? 'Pass' : 'Fail';
    req.body.Total = totalMarks;
    req.body.Percentage = percentage;
    req.body.PassFail = passFail;

    var data = await studentmodel.create(req.body);
    res.status(200).json({
        status:'Add successfully',data
    })
}

exports.delete= async(req,res) => {
    var id = req.params.id;
    var data = await studentmodel.findByIdAndDelete(id);
    res.status(200).json({
        status:'Delate successfully'
    })
}

exports.update = async(req,res) => {

    const { Maths, Science, English, Hindi, Gujarati } = req.body;
    const totalMarks = parseInt(Maths) + parseInt(Science) + parseInt(English) + parseInt(Hindi) + parseInt(Gujarati);
    const percentage = (totalMarks / 5); 
    const passFail = parseInt(Maths) >= 35 && parseInt(Science) >= 35 && parseInt(English) >= 35 && parseInt(Hindi) >= 35 && parseInt(Gujarati) >= 35  ? 'Pass' : 'Fail';
    req.body.Total = totalMarks;
    req.body.Percentage = percentage;
    req.body.PassFail = passFail;

    var id = req.params.id;
    var data = await studentmodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:'Update successfully'
    })
}

exports.show = async(req,res) => {
    var data = await studentmodel.find(req.body);
    res.status(200).json({
        status:'successful',data
    })
}

exports.pass = async(req,res) => {
    var data = await studentmodel.find({PassFail:'Pass'});
    res.status(200).json({
        status:'successful',data
    })
}

exports.fail = async(req,res) => {
    var data = await studentmodel.find({PassFail:'Fail'});
    res.status(200).json({
        status:'successful',data
    })
}

exports.top5 = async(req,res) => {
    var data = await studentmodel.find().sort({ Total: -1 }).limit(5);
    res.status(200).json({
        status:'successful',data
    })
}

exports.top10 = async(req,res) => {
    var data = await studentmodel.find().sort({ Total: -1 }).limit(10);
    res.status(200).json({
        status:'successful',data
    })
}