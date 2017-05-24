module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('https://www.google.com')
      .executeAsync(function(done) {
        done('done');
      }, function(ret) {
          console.log(ret);
      })
      .end();
  }
};