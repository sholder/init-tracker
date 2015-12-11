# init-tracker

An initiative tracker for D&D 5E. Inspired by this post: https://plus.google.com/+RobDonoghue/posts/GEZUzLiENhr

## Using

Start with the 'Manage Entities' button to add some PCs and/or monsters. Everthing
you add will be stored in the local storage of whatever device you're using - this
means you can come back to it later on that device without losing anything, but
it won't sync anywhere else.

When you're ready for an encounter, select all the entities involved (there 
currently isn't a way to add more on the fly, so add everyone that you anticipate
being involved) and click 'New Encounter'. 'New Round' will generate the first
round order for you. Click 'New Round' whenever you're done and want to start
a new one.

## Technical Stuff

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

### Build & development

Run `grunt` for building and `grunt serve` for preview.

### Testing

Running `grunt test` will run the unit tests with karma.

### Deployment

Run `grunt serve:dist`, then copy the `dist` folder to wherever you want to serve
from. Its all html, javascript & css, so nothing else is needed.