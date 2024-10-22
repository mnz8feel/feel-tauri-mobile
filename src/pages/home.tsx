import { useState } from 'react';
import { useAsyncEffect } from 'ahooks';
import { invoke } from '@tauri-apps/api/core';
import { getName, getVersion, getTauriVersion } from '@tauri-apps/api/app';
import { appConfigDir } from '@tauri-apps/api/path';
import { arch, eol, exeExtension, family, hostname, locale, platform, type, version } from '@tauri-apps/plugin-os';
import reactLogo from '../assets/react.svg';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');
  const [info, setInfo] = useState<Record<string, string | null>>({});

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }));
  }

  useAsyncEffect(async () => {
    console.log('useAsyncEffect arch', arch);
    const appName = await getName();
    const appVersion = await getVersion();
    const tauriVersion = await getTauriVersion();
    const appConfigDirPath = await appConfigDir();
    const archName = arch();
    const eolMarker = eol();
    const exeExt = exeExtension();
    const familyAlias = family();
    const hostnameAlias = await hostname();
    const localeAlias = await locale();
    const platformName = platform();
    const osType = type();
    const osVersion = version();
    setInfo({
      appName,
      appVersion,
      tauriVersion,
      appConfigDirPath,
      archName,
      eolMarker,
      exeExt,
      familyAlias,
      hostnameAlias,
      localeAlias,
      platformName,
      osType,
      osVersion,
    });
  }, []);

  console.log('info', info);

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <table>
        <tbody>
          <tr>
            <td>name</td>
            <td>{info?.appName}</td>
          </tr>
          <tr>
            <td>version</td>
            <td>{info?.appVersion}</td>
          </tr>
          <tr>
            <td>tauri version</td>
            <td>{info?.tauriVersion}</td>
          </tr>
          <tr>
            <td>appConfigDirPath</td>
            <td>{info?.appConfigDirPath}</td>
          </tr>
          <tr>
            <td>archName</td>
            <td>{info?.archName}</td>
          </tr>
          <tr>
            <td>eolMarker</td>
            <td>{info?.eolMarker}</td>
          </tr>
          <tr>
            <td>exeExt</td>
            <td>{info?.exeExt}</td>
          </tr>
          <tr>
            <td>familyAlias</td>
            <td>{info?.familyAlias}</td>
          </tr>
          <tr>
            <td>hostnameAlias</td>
            <td>{info?.hostnameAlias}</td>
          </tr>
          <tr>
            <td>localeAlias</td>
            <td>{info?.localeAlias}</td>
          </tr>
          <tr>
            <td>platformName</td>
            <td>{info?.platformName}</td>
          </tr>
          <tr>
            <td>osType</td>
            <td>{info?.osType}</td>
          </tr>
          <tr>
            <td>osVersion</td>
            <td>{info?.osVersion}</td>
          </tr>
        </tbody>
      </table>

      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input id="greet-input" onChange={(e) => setName(e.currentTarget.value)} placeholder="Enter a name..." />
          <button type="submit">Greet</button>
        </form>
      </div>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
