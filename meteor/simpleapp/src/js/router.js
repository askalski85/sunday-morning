Router.route('/', function () {
  Session.set("jobName", "Home");
  this.render('Home');
});

Router.route('/detailed', function (param) {
  console.log(this.params.query.jobName)
  Session.set("jobName", this.params.query.jobName);
  this.render('Home');
  this.render()
});

Router.route('/comparison', function (param) {
  console.log(this.params.query.jobName)
  Session.set("jobName", this.params.query.jobName);
  this.render('Home');
  this.render()
});