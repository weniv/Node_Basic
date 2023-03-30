import { version, versions, env, title } from 'node:process';

// 1. Node.js 버전
console.log(`Version: ${version}`);
// Version: v16.13.1

// 2. 현재 Node.js의 의존성을 가지는 객체들의 버전
console.log(versions);
//{ node: '11.13.0',
//  v8: '7.0.276.38-node.18',
//  uv: '1.27.0',
//  zlib: '1.2.11',
//  brotli: '1.0.7',
//  ares: '1.15.0',
//  modules: '67',
//  nghttp2: '1.34.0',
//  napi: '4',
//  llhttp: '1.1.1',
//  openssl: '1.1.1b',
//  cldr: '34.0',
//  icu: '63.1',
//  tz: '2018e',
//  unicode: '11.0' }

// 3. Node.js가 동작하는 환경에 대한 정보
console.log(env);
//{
//  USER: 'weniv',
//  COMMAND_MODE: 'unix2003',
//  __CFBundleIdentifier: 'com.microsoft.VSCode',
//  PATH: '/usr/local/opt/openssl@3/bin:/opt/homebrew/opt/libpq/bin:/opt/homebrew/opt/libpq/bin:/usr/local/Cellar/pyenv-virtualenv/1.2.1/shims:/Users/weniv/.pyenv/shims:/usr/local/opt/openssl1@3/bin:/Users/weniv/.pyenv/shims:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/weniv/.pyenv/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/usr/local/opt/openssl1@3/bin:/Users/weniv/.pyenv/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/weniv/.cargo/bin',
//  LOGNAME: 'weniv',
//	...
//}

// 4. 현재 프로세스의 타이틀
console.log(title);
// node