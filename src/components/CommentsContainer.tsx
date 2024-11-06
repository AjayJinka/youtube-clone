import { profileIcon } from "../utils/constants";

type CommentType = {
  name: string;
  text: string;
  replies: CommentType[];
};

type CommentListProps = {
  comments: CommentType[];
};

type CommentProps = {
  data: CommentType;
};

const commentsData = [
  {
    name: "Alice",
    text: "This article was really insightful!",
    replies: [
      {
        name: "Bob",
        text: "I totally agree with you, Alice.",
        replies: [
          {
            name: "Charlie",
            text: "Same here! It covered a lot of good points.",
            replies: [
              {
                name: "Dave",
                text: "The author did a great job explaining things.",
                replies: [
                  {
                    name: "Eve",
                    text: "Yes, especially the part about market trends.",
                    replies: [
                      {
                        name: "Frank",
                        text: "Absolutely, that was my favorite part!",
                        replies: [],
                      },
                      {
                        name: "Grace",
                        text: "I think it’ll be useful for my research.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Hank",
        text: "I found some points debatable.",
        replies: [
          {
            name: "Ivy",
            text: "Really? I thought it was spot-on.",
            replies: [
              {
                name: "Jake",
                text: "Well, everyone has their own perspective.",
                replies: [
                  {
                    name: "Kate",
                    text: "True. I appreciated the in-depth analysis.",
                    replies: [],
                  },
                ],
              },
              {
                name: "Liam",
                text: "It's always good to hear different views.",
                replies: [
                  {
                    name: "Mia",
                    text: "Exactly, it makes for a healthy discussion.",
                    replies: [
                      {
                        name: "Noah",
                        text: "Couldn't agree more.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Olivia",
    text: "I love how detailed this post is!",
    replies: [
      {
        name: "Paul",
        text: "Yeah, it’s packed with information.",
        replies: [
          {
            name: "Quinn",
            text: "The data charts were especially helpful.",
            replies: [
              {
                name: "Rachel",
                text: "I’ll refer to them for my project!",
                replies: [],
              },
              {
                name: "Steve",
                text: "Those visuals made it much clearer.",
                replies: [
                  {
                    name: "Tina",
                    text: "Exactly, they break down complex ideas.",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Uma",
            text: "It’s one of the best resources I’ve come across.",
            replies: [
              {
                name: "Vince",
                text: "I’ve bookmarked it for future reference.",
                replies: [],
              },
              {
                name: "Wendy",
                text: "Me too! It’s a must-read.",
                replies: [
                  {
                    name: "Xander",
                    text: "Looks like it's becoming quite popular.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Yara",
    text: "Some sections were a bit advanced for beginners.",
    replies: [
      {
        name: "Zane",
        text: "I agree, but it’s worth the effort to understand.",
        replies: [
          {
            name: "Amy",
            text: "Maybe they can include more beginner-friendly content.",
            replies: [
              {
                name: "Ben",
                text: "Good idea! It’d help reach a broader audience.",
                replies: [
                  {
                    name: "Cara",
                    text: "Or even a follow-up article for beginners.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment: React.FC<CommentProps> = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center gap-4 bg-gray-200 px-2 rounded-lg mb-2">
      <img src={profileIcon} alt={name} className="h-10" />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 border border-l-black pl-4">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
