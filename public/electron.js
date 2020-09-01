const electron = require("electron");
const { app, Menu } = require('electron')
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");
const glob = require('glob');
const { readConfig } = require(`${path.join(__dirname, '/../public/main-process/configuration/site-config')}`);

global.USER = {
  userId: '',
  userPass: '',
  authMethod: '' // 사용처??  그냥 로그인시 넘겨줌 BASE64
}
global.ENCRYPT = {
  pwdAlgorithm: 'RC4', //default rc4
  pwdCryptKey: ''
}
global.ENC = "utf-8";
global.CERT = {
  pukCertKey: '',
  challenge: '',
  session: '',
  enc: ''
}
global.SITE_CONFIG = {
	server_ip:'192.168.0.172',
  server_port:'32551',
  client_version:652
}
global.SERVER_INFO = {
  DS:{
    "pubip":'',
    "ip":'',
    "port":'',
    "isConnected":false
    },
  CS:{
    "pubip":'',
    "ip":'',
    "port":'',
    "isConnected":false
    },
  NS:{
    "pubip":'',
    "ip":'',
    "port":'',
    "isConnected":false
    },
  PS:{
    "pubip":'',
    "ip":'',
    "port":'',
    "isConnected":false
    },
  FS:{
    "pubip":'',
    "ip":'',
    "port":'',
    "isConnected":false
    },
  
  SMS:{
    "pubip":'',
    "ip":'',
    "port":'',
    "isConnected":false
    }
}
global.ORG = {
  org_1_root: 'ORG001',
  selected_org: ''
}

global.MAIN_DS_SEND_COMMAND = {}
global.MAIN_CS_SEND_COMMAND = {}
global.MAIN_PS_SEND_COMMAND = {}

let mainWindow;

function initialize () {

  // Main Process 파일들을 로드한다.
  loadMainProcesses();

  readConfig();
  //readConfig();

  //Menu.setApplicationMenu(null);
  createApplicationMenu();

  function createWindow() {

    mainWindow = new BrowserWindow({ width: 900, height: 680, webPreferences: { nodeIntegration: true }});
    mainWindow.loadURL(
      isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "/../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));

    global.MAIN_WINDOW = mainWindow;
  }

  app.on("ready", createWindow);

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
}

// Require each JS file in the main-process dir
function loadMainProcesses () {
  const files = glob.sync(path.join(__dirname, '/../public/main-process/**/*.js'))
  files.forEach((file) => { require(file) })
}

// create application menu
function createApplicationMenu() {
  
const isMac = process.platform === 'darwin'

const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'hide' },
        { role: 'quit' }
      ]
    }] : []),
    // { role: 'fileMenu' }
    {
      label: 'File',
      submenu: [
        isMac ? { role: 'close' } : { role: 'quit' },
        {
          label: 'OpenDevTool',
          accelerator: 'F12',
          click: () => { mainWindow.webContents.openDevTools(); }
        }
      ]
    }   
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

initialize()