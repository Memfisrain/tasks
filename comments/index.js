// imagine that somebody on our site writes insulting things under many posts.
// we have ability to comment another comment, so we have nested comments.
// Our task is to write a function which returns clean comments, as we know the user_id of this user.
// We are not allowed to modify existing tree, so we have to return new one.

const comments = [
	{
		text: 'My comment',
		user_id: '132',
		comments: [
			{
				text: 'My sub comment',
				user_id: '831',
				comments: []
			},
			{
				text: 'My sub comment 2',
				user_id: '337',
				comments: [
					{
						text: 'my deep comment',
						user_id: '93',
						comments: []
					}
				]
			}
		]
	},

	{
		text: 'My comment 2',
		user_id: '133',
		comments: [
			{
				text: 'My sub comment 2',
				user_id: '337',
				comments: []
			}
		]
	}
]

const getCleanComments = (id, comments = []) =>
	comments.reduce((newComments, comment) =>
		comment.user_id !== id ?
			newComments.push(Object.assign({}, comment, { comments: getCleanComments(id, comment.comments) })) && newComments :
			newComments, [])

const cleanComments = getCleanComments('3337', comments)

console.log(JSON.stringify(cleanComments, '', 2))

console.log(cleanComments === comments)


// [
//   {
//     "text": "My comment",
//     "user_id": "132",
//     "comments": [
//       {
//         "text": "My sub comment",
//         "user_id": "831",
//         "comments": []
//       }
//     ]
//   },
//     {
//       "text": "My comment 2",
//       "user_id": "133",
//       "comments": []
//     }
// ]

