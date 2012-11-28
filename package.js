Package.describe({
  summary: "Angular-ui"
});

Package.on_use(function (api) {
  api.use(['angularjs']);
 	
  api.add_files('angular-ui.js', 'client');
  api.add_files('angular-ui.css', 'client');
});
