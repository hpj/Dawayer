/** @type { Electron.BrowserWindow }
*/
export let mainWindow;

/** @type { Electron.App }
*/
export let app;

let debugMode = false;

/** @param { Electron.BrowserWindow } _window
*/
export function setWindow(_window)
{
  mainWindow = _window;
}

/** @param { Electron.App } _app
*/
export function setApp(_app)
{
  app = _app;
}

export function isDebug()
{
  if (process.argv.includes('--debug'))
    debugMode = true;

  return debugMode;
}

/** reloads the electron browser window
*/
export function reload()
{
  mainWindow.reload();
}

export function focus()
{
  mainWindow.restore();

  mainWindow.show();
  
  mainWindow.focus();
}

export function quit()
{
  app.quit();
}

/** shows/hides the main window
*/
export function showHide()
{
  if (!mainWindow.isVisible() || !mainWindow.isFocused())
  {
    mainWindow.restore();

    mainWindow.show();

    mainWindow.focus();
    
    mainWindow.setSkipTaskbar(false);
  }
  else
  {
    mainWindow.blur();
    mainWindow.hide();

    mainWindow.setSkipTaskbar(true);
  }
}

export function setSkipTaskbar(state)
{
  mainWindow.setSkipTaskbar(state);
}