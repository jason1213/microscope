Template.postSubmit.events({
    'submit form': function (e) {
        e.preventDefault();
        
        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            message: $(e.target).find('[name=message]').val()
        };
        /*
        post._id = Posts.insert(post);
        Router.go('postPage', post);
        */
        Meteor.call('post', post, function (err, id) {
            if(err) {
                return alert(err.reason);
            }

            Router.go('postPage', {_id: id});
        });
    }
});
