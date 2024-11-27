const Home = require('./assets/Icons/Home.png');
const Workspace = require('./assets/Icons/Workspace.png');
const MARPOL = require('./assets/Icons/MARPOL.png');
const OH_S = require('./assets/Icons/OH_S.png');
const Insights = require('./assets/Icons/Insights.png');
const History = require('./assets/Icons/History.png');
const Apps = require('./assets/Icons/Apps.png');
const Settings = require('./assets/Icons/Settings.png');
const Ship = require('./assets/Icons/Ship.png');
const Logout = require('./assets/Icons/Logout.png');
const Hello = require('./assets/Icons/Hello.png');
const UserBadge = require('./assets/Icons/UserBadge.png');
const StatementFact = require('./assets/Icons/StatementFact.png');
const SunCloud = require('./assets/Icons/SunCloud.png');
export const Options_3dot = require('./assets/Icons/Options_3dot.png');



export const menuItems = [
  { name: "Home", isActive: true, icon: Home },
  { name: "Workspace", isActive: false, icon: Workspace },
  { name: "MARPOL", isActive: false, icon: MARPOL },
  { name: "OH&S", isActive: false, icon: OH_S },
  { name: "Insights", isActive: false, icon: Insights },
  { name: "History", isActive: false, icon: History },
  { name: "Apps", isActive: false, icon: Apps },
  { name: "Settings", isActive: false, icon: Settings },
];

export const headerItems = {
  name: "Dev Vessel",
  crewmates: "16",
  active: "09 ",
  shipIcon: Ship,
  logout: Logout,
  gmtTime: "+09:00",
};


export const userInfo = {
  greetings: Hello,
  UserBadge: UserBadge,
  post: "Second Officer",
  firstName: "Abdul",
  lastName: "Ghani",
  crewId: "88526",
  lastActivity: "Submitted the Deck Log for",
  watch: "1200-1600",
  utcTime: "08:16"
}

export const StatementFactDetails = {
  journey: "SGSIN-NOOSL",
  status: "Cargo First Lift",
  nextPortCall: "INVTZ1",
  ETA: "Nov 27, 14:50 UTC",
  icon : StatementFact
}


// export const tasks = [
//   { title: '0800-1200 Watch', status: 'Completed', dueDate: '2023-03-02T00:00:00' },
//   { title: 'COVID19 Health Guidelines', status: 'Due in 2 days', dueDate: '2023-03-04T00:00:00' },
//   { title: 'Steering Check', status: 'Due in 2 hours', dueDate: '2023-03-02T10:00:00' },
//   { title: 'ECDIS Check', status: 'Due in 6 hours', dueDate: '2023-03-02T14:00:00' },
//   { title: 'Review Noon Report', status: 'Due in 8 hours', dueDate: '2023-03-02T16:00:00' },
// ];

export const myDayTasks = [
  [{ day: "Tuesday, March 2", icon : SunCloud }],
  [
    {
      id: 1,
      title: "Deck Log | 1200 - 1600 Watch",
      assignedBy: "Wayship",
      completed: true,
      dueIn: null,
    },
    {
      id: 2,
      title: "COVID19 Health Guidelines",
      assignedBy: "Technical",
      completed: false,
      dueIn: "2 days",
    },
    {
      id: 3,
      title: "Steering Check",
      assignedBy: "Captain",
      completed: false,
      dueIn: "2 hours",
    },
    {
      id: 4,
      title: "ECDIS Check",
      assignedBy: "Chief Officer",
      completed: false,
      dueIn: "6 hours",
    },
    {
      id: 5,
      title: "Review Noon Report",
      assignedBy: "Self",
      completed: false,
      dueIn: "8 hours",
    },
  ]
];

export const dailyStreamUpdates = [
  {
    type: "important",
    title: "Captain’s Bridge Order dated Nov 27, 2020",
    views: 1,
    action: "READ",
  },
  {
    type: "update",
    title:
      "Second Officer Oliver submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist",
    timestamp: "UTC 1105 | LT +06:30",
  },
  {
    type: "update",
    title:
      "Third Engineer Edward submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist",
    timestamp: "UTC 1055 | LT +06:30",
  },
];



