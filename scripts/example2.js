module.exports = function(robot) {

  robot.hear(/badger/i, function(res){

    res.send('Yea whatever');

  });

};  
