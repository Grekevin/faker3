
/**
入口

19:/！M6gHGDHwlC！☞綡✯D○ōσng复制全部内容，打开京东，即可为我助力，领大额红包！红包限时翻倍，一起来领年终奖吧！

自己解析出助力码 inviteId

https://h5.m.jd.com/pb/013927490/25wTmNQhkZY7UdAzu8cTBS9YfR1p/index.html&babelChannel=ttt11?inviteId=T022v_xzQRgc80nWKBv3kPMNfACjRQl4aW5kRrbA&from=kouling&sid=e5a0395c81eb223f6812496826b0af3w&un_area=19_1666_36267_36272

环境变量 export taskToken=""
7 7 7 7 7 jd_harmony.js

*/
const $ = new Env('金榜年终奖助力');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message = "";
let taskToken = process.env.taskToken ?? '';

var _0xodK='jsjiami.com.v6',_0xodK_=['‮_0xodK'],_0x59bc=[_0xodK,'\x5a\x6e\x56\x75\x59\x33\x52\x70\x62\x32\x35\x4a\x5a\x44\x31\x7a\x63\x47\x78\x70\x64\x45\x68\x76\x62\x6d\x64\x69\x59\x57\x39\x66\x5a\x32\x56\x30\x53\x47\x39\x74\x5a\x55\x52\x68\x64\x47\x45\x6d\x59\x58\x42\x77\x61\x57\x51\x39\x4a\x6d\x46\x79\x5a\x57\x45\x39\x4a\x6d\x4a\x76\x5a\x48\x6b\x39\x65\x79\x4a\x68\x63\x48\x42\x4a\x5a\x43\x49\x36\x49\x6a\x46\x46\x52\x6c\x5a\x59\x65\x58\x63\x69\x4c\x43\x4a\x30\x59\x58\x4e\x72\x56\x47\x39\x72\x5a\x57\x34\x69\x4f\x69\x49\x3d','\x49\x6e\x30\x6d\x59\x32\x78\x70\x5a\x57\x35\x30\x50\x58\x64\x6f\x4e\x53\x5a\x6a\x62\x47\x6c\x6c\x62\x6e\x52\x57\x5a\x58\x4a\x7a\x61\x57\x39\x75\x50\x54\x45\x75\x4d\x43\x34\x77','\x5a\x6e\x56\x75\x59\x33\x52\x70\x62\x32\x35\x4a\x5a\x44\x31\x6f\x59\x58\x4a\x74\x62\x32\x35\x35\x58\x32\x4e\x76\x62\x47\x78\x6c\x59\x33\x52\x54\x59\x32\x39\x79\x5a\x53\x5a\x68\x63\x48\x42\x70\x5a\x44\x30\x6d\x59\x58\x4a\x6c\x59\x54\x30\x6d\x59\x6d\x39\x6b\x65\x54\x31\x37\x49\x6d\x46\x77\x63\x45\x6c\x6b\x49\x6a\x6f\x69\x4d\x55\x56\x47\x56\x6c\x68\x35\x64\x79\x49\x73\x49\x6e\x52\x68\x63\x32\x74\x55\x62\x32\x74\x6c\x62\x69\x49\x36\x49\x67\x3d\x3d','\x49\x69\x77\x69\x64\x47\x46\x7a\x61\x30\x6c\x6b\x49\x6a\x6f\x32\x4c\x43\x4a\x68\x59\x33\x52\x70\x62\x32\x35\x55\x65\x58\x42\x6c\x49\x6a\x6f\x77\x66\x53\x5a\x6a\x62\x47\x6c\x6c\x62\x6e\x51\x39\x64\x32\x67\x31\x4a\x6d\x4e\x73\x61\x57\x56\x75\x64\x46\x5a\x6c\x63\x6e\x4e\x70\x62\x32\x34\x39\x4d\x53\x34\x77\x4c\x6a\x41\x3d','\x64\x31\x56\x69\x62\x58\x63\x3d','\x54\x6b\x52\x77\x61\x57\x4d\x3d','\x52\x48\x5a\x73\x54\x58\x6b\x3d','\x59\x58\x42\x70\x4c\x6d\x30\x75\x61\x6d\x51\x75\x59\x32\x39\x74','\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x6f\x4e\x53\x35\x74\x4c\x6d\x70\x6b\x4c\x6d\x4e\x76\x62\x51\x3d\x3d','\x59\x58\x42\x77\x62\x47\x6c\x6a\x59\x58\x52\x70\x62\x32\x34\x76\x65\x43\x31\x33\x64\x33\x63\x74\x5a\x6d\x39\x79\x62\x53\x31\x31\x63\x6d\x78\x6c\x62\x6d\x4e\x76\x5a\x47\x56\x6b','\x59\x58\x42\x77\x62\x47\x6c\x6a\x59\x58\x52\x70\x62\x32\x34\x76\x61\x6e\x4e\x76\x62\x69\x77\x67\x64\x47\x56\x34\x64\x43\x39\x77\x62\x47\x46\x70\x62\x69\x77\x67\x4b\x69\x38\x71','\x61\x32\x56\x6c\x63\x43\x31\x68\x62\x47\x6c\x32\x5a\x51\x3d\x3d','\x53\x6b\x51\x30\x61\x56\x42\x6f\x62\x32\x35\x6c\x4c\x7a\x45\x32\x4e\x7a\x59\x31\x4d\x43\x41\x6f\x61\x56\x42\x6f\x62\x32\x35\x6c\x4f\x79\x42\x70\x54\x31\x4d\x67\x4d\x54\x4d\x75\x4e\x7a\x73\x67\x55\x32\x4e\x68\x62\x47\x55\x76\x4d\x79\x34\x77\x4d\x43\x6b\x3d','\x65\x6d\x67\x74\x53\x47\x46\x75\x63\x79\x31\x44\x54\x6a\x74\x78\x50\x54\x45\x3d','\x5a\x33\x70\x70\x63\x43\x77\x67\x5a\x47\x56\x6d\x62\x47\x46\x30\x5a\x53\x77\x67\x59\x6e\x49\x3d','\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x68\x63\x47\x6b\x75\x62\x53\x35\x71\x5a\x43\x35\x6a\x62\x32\x30\x76\x59\x32\x78\x70\x5a\x57\x35\x30\x4c\x6d\x46\x6a\x64\x47\x6c\x76\x62\x67\x3d\x3d','\x53\x6c\x52\x7a\x55\x6b\x6b\x3d','\x65\x6c\x4e\x4b\x57\x6d\x77\x3d','\x65\x6e\x52\x76\x54\x55\x51\x3d','\x64\x6b\x35\x35\x63\x33\x49\x3d','\x53\x33\x42\x71\x55\x31\x63\x3d','\x51\x57\x78\x32\x59\x6e\x59\x3d','\x64\x58\x56\x7a\x55\x45\x49\x3d','\x52\x32\x4a\x4c\x52\x6d\x59\x3d','\x61\x45\x56\x58\x59\x6d\x73\x3d','\x55\x57\x31\x31\x56\x31\x49\x3d','\x62\x47\x39\x6e\x52\x58\x4a\x79','\x63\x47\x39\x7a\x64\x41\x3d\x3d','\x55\x47\x64\x75\x53\x33\x55\x3d','\x55\x46\x4e\x71\x51\x6b\x51\x3d','\x61\x6b\x68\x61\x61\x6d\x77\x3d','\x59\x33\x4a\x52\x5a\x32\x77\x3d','\x65\x6c\x64\x45\x54\x48\x4d\x3d','\x59\x32\x39\x6b\x5a\x51\x3d\x3d','\x63\x32\x39\x59\x59\x32\x38\x3d','\x4d\x54\x41\x77\x4d\x51\x3d\x3d','\x64\x58\x4e\x6c\x63\x6b\x6c\x75\x5a\x6d\x38\x3d','\x62\x30\x6c\x57\x61\x45\x6b\x3d','\x53\x58\x4a\x77\x64\x6b\x6f\x3d','\x59\x33\x52\x50\x53\x57\x73\x3d','\x65\x55\x6c\x36\x53\x30\x34\x3d','\x35\x4c\x71\x73\x35\x4c\x69\x63\x36\x4c\x2b\x55\x35\x5a\x75\x65\x35\x4c\x71\x47\x35\x36\x6d\x36\x35\x70\x57\x77\x35\x6f\x32\x75','\x64\x31\x68\x58\x57\x46\x6f\x3d','\x62\x6b\x74\x61\x53\x55\x6f\x3d','\x56\x45\x52\x36\x5a\x45\x59\x3d','\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x74\x5a\x53\x31\x68\x63\x47\x6b\x75\x61\x6d\x51\x75\x59\x32\x39\x74\x4c\x33\x56\x7a\x5a\x58\x4a\x66\x62\x6d\x56\x33\x4c\x32\x6c\x75\x5a\x6d\x38\x76\x52\x32\x56\x30\x53\x6b\x52\x56\x63\x32\x56\x79\x53\x57\x35\x6d\x62\x31\x56\x75\x61\x57\x39\x75','\x62\x57\x55\x74\x59\x58\x42\x70\x4c\x6d\x70\x6b\x4c\x6d\x4e\x76\x62\x51\x3d\x3d','\x4b\x69\x38\x71','\x54\x57\x39\x36\x61\x57\x78\x73\x59\x53\x38\x31\x4c\x6a\x41\x67\x4b\x47\x6c\x51\x61\x47\x39\x75\x5a\x54\x73\x67\x51\x31\x42\x56\x49\x47\x6c\x51\x61\x47\x39\x75\x5a\x53\x42\x50\x55\x79\x41\x78\x4e\x46\x38\x7a\x49\x47\x78\x70\x61\x32\x55\x67\x54\x57\x46\x6a\x49\x45\x39\x54\x49\x46\x67\x70\x49\x45\x46\x77\x63\x47\x78\x6c\x56\x32\x56\x69\x53\x32\x6c\x30\x4c\x7a\x59\x77\x4e\x53\x34\x78\x4c\x6a\x45\x31\x49\x43\x68\x4c\x53\x46\x52\x4e\x54\x43\x77\x67\x62\x47\x6c\x72\x5a\x53\x42\x48\x5a\x57\x4e\x72\x62\x79\x6b\x67\x56\x6d\x56\x79\x63\x32\x6c\x76\x62\x69\x38\x78\x4e\x43\x34\x77\x4c\x6a\x49\x67\x54\x57\x39\x69\x61\x57\x78\x6c\x4c\x7a\x45\x31\x52\x54\x45\x30\x4f\x43\x42\x54\x59\x57\x5a\x68\x63\x6d\x6b\x76\x4e\x6a\x41\x30\x4c\x6a\x45\x3d','\x65\x6d\x67\x74\x59\x32\x34\x3d','\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x6f\x62\x32\x31\x6c\x4c\x6d\x30\x75\x61\x6d\x51\x75\x59\x32\x39\x74\x4c\x32\x31\x35\x53\x6d\x51\x76\x62\x6d\x56\x33\x61\x47\x39\x74\x5a\x53\x35\x68\x59\x33\x52\x70\x62\x32\x34\x2f\x63\x32\x4e\x6c\x62\x6d\x56\x32\x59\x57\x77\x39\x4d\x69\x5a\x31\x5a\x6d\x4d\x39\x4a\x67\x3d\x3d','\x59\x57\x4a\x53\x61\x6b\x63\x3d','\x5a\x6e\x42\x45\x52\x6d\x45\x3d','\x5a\x57\x5a\x6c\x57\x56\x49\x3d','\x55\x57\x46\x4b\x56\x33\x45\x3d','\x61\x55\x39\x32\x64\x6d\x55\x3d','\x52\x56\x52\x33\x55\x6d\x77\x3d','\x63\x33\x68\x59\x55\x55\x49\x3d','\x56\x58\x5a\x44\x63\x31\x6f\x3d','\x55\x57\x4e\x76\x56\x6d\x77\x3d','\x51\x58\x56\x45\x59\x6e\x63\x3d','\x65\x6d\x46\x47\x54\x32\x51\x3d','\x59\x56\x6c\x33\x62\x45\x63\x3d','\x61\x6d\x46\x45\x54\x57\x4d\x3d','\x54\x33\x52\x5a\x65\x47\x59\x3d','\x61\x31\x52\x52\x54\x6d\x6f\x3d','\x53\x6d\x46\x4e\x51\x58\x6f\x3d','\x55\x48\x42\x4e\x5a\x55\x59\x3d','\x5a\x57\x35\x46\x59\x56\x4d\x3d','\x63\x30\x46\x4f\x57\x47\x51\x3d','\x5a\x45\x39\x52\x61\x45\x30\x3d','\x65\x45\x35\x47\x51\x31\x51\x3d','\x63\x47\x74\x59\x5a\x33\x51\x3d','\x5a\x32\x56\x30','\x57\x57\x4e\x52\x52\x57\x6b\x3d','\x56\x45\x68\x4a\x63\x56\x67\x3d','\x52\x33\x4e\x73\x55\x45\x45\x3d','\x54\x6d\x64\x43\x65\x56\x51\x3d','\x63\x6d\x56\x30\x59\x32\x39\x6b\x5a\x51\x3d\x3d','\x54\x6e\x6c\x49\x55\x31\x4d\x3d','\x57\x57\x64\x70\x59\x57\x51\x3d','\x65\x56\x5a\x52\x64\x56\x59\x3d','\x52\x45\x4e\x6a\x56\x33\x45\x3d','\x5a\x47\x46\x30\x59\x51\x3d\x3d','\x61\x47\x46\x7a\x54\x33\x64\x75\x55\x48\x4a\x76\x63\x47\x56\x79\x64\x48\x6b\x3d','\x5a\x6c\x42\x7a\x52\x6e\x41\x3d','\x59\x6d\x46\x7a\x5a\x55\x6c\x75\x5a\x6d\x38\x3d','\x62\x6d\x6c\x6a\x61\x32\x35\x68\x62\x57\x55\x3d','\x55\x6b\x78\x6a\x55\x33\x51\x3d','\x63\x32\x5a\x4d\x52\x55\x77\x3d','\x63\x48\x4e\x68\x59\x6b\x4d\x3d','\x63\x48\x6c\x33\x62\x48\x6f\x3d','\x57\x6e\x64\x4c\x63\x31\x67\x3d','\x55\x58\x46\x56\x55\x46\x59\x3d','\x65\x55\x39\x6c\x64\x6b\x30\x3d','\x61\x58\x4e\x4f\x62\x32\x52\x6c','\x61\x32\x56\x35\x63\x77\x3d\x3d','\x5a\x6d\x39\x79\x52\x57\x46\x6a\x61\x41\x3d\x3d','\x63\x48\x56\x7a\x61\x41\x3d\x3d','\x5a\x57\x35\x32','\x53\x6b\x52\x66\x52\x45\x56\x43\x56\x55\x63\x3d','\x5a\x6d\x46\x73\x63\x32\x55\x3d','\x62\x47\x39\x6e','\x5a\x32\x56\x30\x5a\x47\x46\x30\x59\x51\x3d\x3d','\x51\x32\x39\x76\x61\x32\x6c\x6c\x63\x30\x70\x45','\x63\x47\x46\x79\x63\x32\x55\x3d','\x62\x57\x46\x77','\x59\x32\x39\x76\x61\x32\x6c\x6c','\x63\x6d\x56\x32\x5a\x58\x4a\x7a\x5a\x51\x3d\x3d','\x51\x32\x39\x76\x61\x32\x6c\x6c\x53\x6b\x51\x79','\x51\x32\x39\x76\x61\x32\x6c\x6c\x53\x6b\x51\x3d','\x5a\x6d\x6c\x73\x64\x47\x56\x79','\x34\x34\x43\x51\x35\x6f\x2b\x51\x35\x36\x53\x36\x34\x34\x43\x52\x36\x4b\x2b\x33\x35\x59\x57\x49\x36\x49\x36\x33\x35\x59\x2b\x57\x35\x4c\x71\x73\x35\x4c\x69\x63\x36\x4c\x53\x6d\x35\x59\x2b\x33\x35\x4c\x69\x41\x59\x32\x39\x76\x61\x32\x6c\x6c\x43\x75\x65\x62\x74\x4f\x61\x4f\x70\x65\x53\x39\x76\x2b\x65\x55\x71\x45\x35\x76\x59\x6e\x6c\x45\x59\x65\x65\x61\x68\x4f\x53\x36\x72\x4f\x53\x34\x6e\x4f\x65\x74\x76\x75\x57\x49\x73\x4f\x69\x4f\x74\x2b\x57\x50\x6c\x67\x3d\x3d','\x61\x48\x52\x30\x63\x48\x4d\x36\x4c\x79\x39\x69\x5a\x57\x46\x75\x4c\x6d\x30\x75\x61\x6d\x51\x75\x59\x32\x39\x74\x4c\x32\x4a\x6c\x59\x57\x34\x76\x63\x32\x6c\x6e\x62\x6b\x6c\x75\x5a\x47\x56\x34\x4c\x6d\x46\x6a\x64\x47\x6c\x76\x62\x67\x3d\x3d','\x57\x57\x35\x75\x65\x55\x63\x3d','\x5a\x48\x70\x6e\x53\x30\x4d\x3d','\x35\x59\x36\x37\x35\x59\x71\x70\x35\x59\x71\x62\x49\x41\x3d\x3d','\x55\x30\x4a\x73\x55\x45\x73\x3d','\x52\x45\x70\x4b\x5a\x32\x4d\x3d','\x35\x61\x47\x72\x35\x59\x61\x5a\x35\x34\x36\x76\x35\x61\x4b\x44\x35\x59\x2b\x59\x49\x48\x52\x68\x63\x32\x74\x55\x62\x32\x74\x6c\x62\x67\x3d\x3d','\x62\x58\x4e\x6e','\x62\x6d\x46\x74\x5a\x51\x3d\x3d','\x63\x55\x68\x5a\x55\x45\x45\x3d','\x63\x47\x6c\x4a\x63\x31\x67\x3d','\x65\x47\x56\x46\x64\x47\x34\x3d','\x65\x48\x4e\x31\x61\x6b\x38\x3d','\x57\x58\x42\x6b\x51\x32\x67\x3d','\x61\x58\x4e\x4d\x62\x32\x64\x70\x62\x67\x3d\x3d','\x54\x58\x4e\x59\x62\x6e\x51\x3d','\x64\x47\x4a\x7a\x53\x55\x4d\x3d','\x57\x47\x35\x75\x5a\x6e\x55\x3d','\x62\x47\x56\x75\x5a\x33\x52\x6f','\x56\x58\x4e\x6c\x63\x6b\x35\x68\x62\x57\x55\x3d','\x59\x32\x46\x48\x5a\x47\x38\x3d','\x62\x57\x46\x30\x59\x32\x67\x3d','\x61\x57\x35\x6b\x5a\x58\x67\x3d','\x62\x6d\x6c\x6a\x61\x30\x35\x68\x62\x57\x55\x3d','\x57\x45\x5a\x4c\x51\x32\x67\x3d','\x43\x69\x6f\x71\x4b\x69\x6f\x71\x4b\x75\x57\x38\x67\x4f\x57\x6e\x69\x2b\x4f\x41\x6b\x4f\x53\x36\x72\x4f\x53\x34\x6e\x4f\x69\x30\x70\x75\x57\x50\x74\x77\x3d\x3d','\x4b\x69\x6f\x71\x4b\x69\x6f\x71\x4b\x69\x6f\x71\x43\x67\x3d\x3d','\x34\x34\x43\x51\x35\x6f\x2b\x51\x35\x36\x53\x36\x34\x34\x43\x52\x59\x32\x39\x76\x61\x32\x6c\x6c\x35\x62\x65\x79\x35\x61\x53\x78\x35\x70\x57\x49','\x35\x4c\x71\x73\x35\x4c\x69\x63\x36\x4c\x53\x6d\x35\x59\x2b\x33','\x43\x75\x69\x76\x74\x2b\x6d\x48\x6a\x65\x61\x57\x73\x4f\x65\x5a\x75\x2b\x57\x39\x6c\x65\x69\x4f\x74\x2b\x57\x50\x6c\x67\x70\x6f\x64\x48\x52\x77\x63\x7a\x6f\x76\x4c\x32\x4a\x6c\x59\x57\x34\x75\x62\x53\x35\x71\x5a\x43\x35\x6a\x62\x32\x30\x76\x59\x6d\x56\x68\x62\x69\x39\x7a\x61\x57\x64\x75\x53\x57\x35\x6b\x5a\x58\x67\x75\x59\x57\x4e\x30\x61\x57\x39\x75','\x59\x6d\x56\x68\x62\x67\x3d\x3d','\x64\x32\x46\x70\x64\x41\x3d\x3d','\x53\x45\x52\x31\x52\x6d\x73\x3d','\x53\x57\x5a\x4d\x55\x33\x51\x3d','\x54\x57\x74\x57\x61\x58\x45\x3d','\x54\x31\x64\x74\x64\x46\x51\x3d','\x56\x47\x52\x34\x64\x6d\x73\x3d','\x61\x6c\x5a\x4e\x53\x6c\x41\x3d','\x59\x32\x46\x30\x59\x32\x67\x3d','\x4c\x43\x44\x6c\x70\x4c\x48\x6f\x74\x4b\x55\x68\x49\x4f\x57\x4f\x6e\x2b\x57\x62\x6f\x44\x6f\x67','\x5a\x6d\x6c\x75\x59\x57\x78\x73\x65\x51\x3d\x3d','\x5a\x47\x39\x75\x5a\x51\x3d\x3d','\x62\x32\x39\x36\x5a\x48\x59\x3d','\x43\x6a\x5a\x51\x73\x54\x6a\x71\x69\x61\x6d\x69\x6c\x2e\x63\x6f\x6d\x6e\x6e\x2e\x58\x76\x36\x4f\x56\x4c\x64\x4b\x72\x3d\x3d'];if(function(_0x477d71,_0x327f13,_0x9c58a2){function _0x20c1aa(_0x16893d,_0x58147e,_0x1412b6,_0x5124a2,_0x23d743,_0x56cf5f){_0x58147e=_0x58147e>>0x8,_0x23d743='po';var _0x4d4a49='shift',_0x4d9ba1='push',_0x56cf5f='‮';if(_0x58147e<_0x16893d){while(--_0x16893d){_0x5124a2=_0x477d71[_0x4d4a49]();if(_0x58147e===_0x16893d&&_0x56cf5f==='‮'&&_0x56cf5f['length']===0x1){_0x58147e=_0x5124a2,_0x1412b6=_0x477d71[_0x23d743+'p']();}else if(_0x58147e&&_0x1412b6['replace'](/[CZQTqlnnXOVLdKr=]/g,'')===_0x58147e){_0x477d71[_0x4d9ba1](_0x5124a2);}}_0x477d71[_0x4d9ba1](_0x477d71[_0x4d4a49]());}return 0x1190dc;};return _0x20c1aa(++_0x327f13,_0x9c58a2)>>_0x327f13^_0x9c58a2;}(_0x59bc,0xfb,0xfb00),_0x59bc){_0xodK_=_0x59bc['length']^0xfb;};function _0x563e(_0x2d8f05,_0x4b81bb){_0x2d8f05=~~'0x'['concat'](_0x2d8f05['slice'](0x1));var _0x34a12b=_0x59bc[_0x2d8f05];if(_0x563e['uVXdUm']===undefined&&'‮'['length']===0x1){(function(){var _0x36c6a6;try{var _0x33748d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x36c6a6=_0x33748d();}catch(_0x3e4c21){_0x36c6a6=window;}var _0x5c685e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x36c6a6['atob']||(_0x36c6a6['atob']=function(_0x3e3156){var _0x1e9e81=String(_0x3e3156)['replace'](/=+$/,'');for(var _0x292610=0x0,_0x151bd2,_0x558098,_0xd7aec1=0x0,_0x230f38='';_0x558098=_0x1e9e81['charAt'](_0xd7aec1++);~_0x558098&&(_0x151bd2=_0x292610%0x4?_0x151bd2*0x40+_0x558098:_0x558098,_0x292610++%0x4)?_0x230f38+=String['fromCharCode'](0xff&_0x151bd2>>(-0x2*_0x292610&0x6)):0x0){_0x558098=_0x5c685e['indexOf'](_0x558098);}return _0x230f38;});}());_0x563e['NNSnhf']=function(_0x948b6c){var _0x29929c=atob(_0x948b6c);var _0x5dd881=[];for(var _0x550fbc=0x0,_0x18d5c9=_0x29929c['length'];_0x550fbc<_0x18d5c9;_0x550fbc++){_0x5dd881+='%'+('00'+_0x29929c['charCodeAt'](_0x550fbc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5dd881);};_0x563e['seRMNm']={};_0x563e['uVXdUm']=!![];}var _0x4ce2f1=_0x563e['seRMNm'][_0x2d8f05];if(_0x4ce2f1===undefined){_0x34a12b=_0x563e['NNSnhf'](_0x34a12b);_0x563e['seRMNm'][_0x2d8f05]=_0x34a12b;}else{_0x34a12b=_0x4ce2f1;}return _0x34a12b;};if($[_0x563e('‫0')]()){Object[_0x563e('‫1')](jdCookieNode)[_0x563e('‫2')](_0x2ebccb=>{cookiesArr[_0x563e('‮3')](jdCookieNode[_0x2ebccb]);});if(process[_0x563e('‫4')][_0x563e('‮5')]&&process[_0x563e('‫4')][_0x563e('‮5')]===_0x563e('‮6'))console[_0x563e('‫7')]=()=>{};}else{let cookiesData=$[_0x563e('‫8')](_0x563e('‫9'))||'\x5b\x5d';cookiesData=JSON[_0x563e('‫a')](cookiesData);cookiesArr=cookiesData[_0x563e('‫b')](_0x31d96a=>_0x31d96a[_0x563e('‫c')]);cookiesArr[_0x563e('‮d')]();cookiesArr[_0x563e('‮3')](...[$[_0x563e('‫8')](_0x563e('‫e')),$[_0x563e('‫8')](_0x563e('‫f'))]);cookiesArr[_0x563e('‮d')]();cookiesArr=cookiesArr[_0x563e('‫10')](_0x3fc861=>!!_0x3fc861);}!(async()=>{var _0x488f70={'\x54\x64\x78\x76\x6b':function(_0x19a30b,_0x543f73){return _0x19a30b===_0x543f73;},'\x6a\x56\x4d\x4a\x50':_0x563e('‮6'),'\x71\x48\x59\x50\x41':_0x563e('‫11'),'\x70\x69\x49\x73\x58':_0x563e('‫12'),'\x78\x65\x45\x74\x6e':function(_0x1b907b,_0x1cb967){return _0x1b907b===_0x1cb967;},'\x78\x73\x75\x6a\x4f':_0x563e('‫13'),'\x59\x70\x64\x43\x68':_0x563e('‮14'),'\x4d\x73\x58\x6e\x74':function(_0x4f9c02,_0x5cce86){return _0x4f9c02+_0x5cce86;},'\x74\x62\x73\x49\x43':_0x563e('‮15'),'\x58\x6e\x6e\x66\x75':function(_0x28635f,_0x3f1911){return _0x28635f<_0x3f1911;},'\x63\x61\x47\x64\x6f':function(_0x378145,_0x26451e){return _0x378145(_0x26451e);},'\x58\x46\x4b\x43\x68':function(_0x4f8a1b){return _0x4f8a1b();},'\x48\x44\x75\x46\x6b':function(_0x5d96a8,_0x42e9ad){return _0x5d96a8!==_0x42e9ad;},'\x49\x66\x4c\x53\x74':_0x563e('‫16'),'\x4d\x6b\x56\x69\x71':_0x563e('‮17'),'\x4f\x57\x6d\x74\x54':_0x563e('‫18')};if(!cookiesArr[0x0]){$[_0x563e('‮19')]($[_0x563e('‫1a')],_0x488f70[_0x563e('‫1b')],_0x488f70[_0x563e('‮1c')],{'open-url':_0x488f70[_0x563e('‮1c')]});return;}if(taskToken){if(_0x488f70[_0x563e('‮1d')](_0x488f70[_0x563e('‮1e')],_0x488f70[_0x563e('‫1f')])){$[_0x563e('‫20')]=![];return;}else{console[_0x563e('‫7')](_0x488f70[_0x563e('‮21')](_0x488f70[_0x563e('‫22')],taskToken));for(let _0x337d55=0x0;_0x488f70[_0x563e('‮23')](_0x337d55,cookiesArr[_0x563e('‫24')]);_0x337d55++){if(cookiesArr[_0x337d55]){cookie=cookiesArr[_0x337d55];originCookie=cookiesArr[_0x337d55];newCookie='';$[_0x563e('‮25')]=_0x488f70[_0x563e('‫26')](decodeURIComponent,cookie[_0x563e('‫27')](/pt_pin=(.+?);/)&&cookie[_0x563e('‫27')](/pt_pin=(.+?);/)[0x1]);$[_0x563e('‫28')]=_0x488f70[_0x563e('‮21')](_0x337d55,0x1);$[_0x563e('‫20')]=!![];$[_0x563e('‮29')]='';await _0x488f70[_0x563e('‫2a')](checkCookie);console[_0x563e('‫7')](_0x563e('‮2b')+$[_0x563e('‫28')]+'\u3011'+($[_0x563e('‮29')]||$[_0x563e('‮25')])+_0x563e('‫2c'));if(!$[_0x563e('‫20')]){$[_0x563e('‮19')]($[_0x563e('‫1a')],_0x563e('‮2d'),_0x563e('‫2e')+$[_0x563e('‫28')]+'\x20'+($[_0x563e('‮29')]||$[_0x563e('‮25')])+_0x563e('‮2f'),{'open-url':_0x488f70[_0x563e('‮1c')]});if($[_0x563e('‫0')]()){}continue;}$[_0x563e('‫30')]=0x0;await _0x488f70[_0x563e('‫2a')](main);await $[_0x563e('‫31')](0x3e8);}}}}else{if(_0x488f70[_0x563e('‮32')](_0x488f70[_0x563e('‫33')],_0x488f70[_0x563e('‮34')])){console[_0x563e('‫7')](_0x488f70[_0x563e('‫35')]);}else{Object[_0x563e('‫1')](jdCookieNode)[_0x563e('‫2')](_0x2e9121=>{cookiesArr[_0x563e('‮3')](jdCookieNode[_0x2e9121]);});if(process[_0x563e('‫4')][_0x563e('‮5')]&&_0x488f70[_0x563e('‮36')](process[_0x563e('‫4')][_0x563e('‮5')],_0x488f70[_0x563e('‫37')]))console[_0x563e('‫7')]=()=>{};}}})()[_0x563e('‫38')](_0x150d78=>{$[_0x563e('‫7')]('','\u274c\x20'+$[_0x563e('‫1a')]+_0x563e('‮39')+_0x150d78+'\x21','');})[_0x563e('‮3a')](()=>{$[_0x563e('‮3b')]();});async function main(){var _0x28c6f9={'\x6f\x6f\x7a\x64\x76':function(_0x491ddc,_0x211961){return _0x491ddc(_0x211961);}};await _0x28c6f9[_0x563e('‫3c')](taskPost,_0x563e('‫3d')+taskToken+_0x563e('‫3e'));await _0x28c6f9[_0x563e('‫3c')](taskPost,_0x563e('‫3f')+taskToken+_0x563e('‮40'));}async function taskPost(_0x1c88f5){var _0x9b99ba={'\x50\x67\x6e\x4b\x75':_0x563e('‫18'),'\x50\x53\x6a\x42\x44':function(_0xd05f21,_0x32db66){return _0xd05f21===_0x32db66;},'\x6a\x48\x5a\x6a\x6c':_0x563e('‮41'),'\x63\x72\x51\x67\x6c':_0x563e('‫42'),'\x73\x6f\x58\x63\x6f':function(_0x3ccd63){return _0x3ccd63();},'\x68\x45\x57\x62\x6b':function(_0x1f06ee,_0x3f6438){return _0x1f06ee!==_0x3f6438;},'\x51\x6d\x75\x57\x52':_0x563e('‮43'),'\x4a\x54\x73\x52\x49':_0x563e('‫44'),'\x7a\x53\x4a\x5a\x6c':_0x563e('‫45'),'\x7a\x74\x6f\x4d\x44':_0x563e('‫46'),'\x76\x4e\x79\x73\x72':_0x563e('‮47'),'\x4b\x70\x6a\x53\x57':_0x563e('‮48'),'\x41\x6c\x76\x62\x76':_0x563e('‫49'),'\x75\x75\x73\x50\x42':_0x563e('‮4a'),'\x47\x62\x4b\x46\x66':_0x563e('‮4b')};let _0x583e0a={'\x75\x72\x6c':_0x563e('‫4c'),'\x68\x65\x61\x64\x65\x72\x73':{'\x48\x6f\x73\x74':_0x9b99ba[_0x563e('‮4d')],'\x4f\x72\x69\x67\x69\x6e':_0x9b99ba[_0x563e('‮4e')],'\x52\x65\x66\x65\x72\x65\x72':_0x9b99ba[_0x563e('‮4e')],'Content-Type':_0x9b99ba[_0x563e('‫4f')],'\x41\x63\x63\x65\x70\x74':_0x9b99ba[_0x563e('‫50')],'\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e':_0x9b99ba[_0x563e('‮51')],'\x43\x6f\x6f\x6b\x69\x65':cookie,'User-Agent':_0x9b99ba[_0x563e('‫52')],'Accept-Language':_0x9b99ba[_0x563e('‫53')],'Accept-Encoding':_0x9b99ba[_0x563e('‫54')]},'\x62\x6f\x64\x79':_0x1c88f5};return new Promise(_0x572d8e=>{if(_0x9b99ba[_0x563e('‮55')](_0x9b99ba[_0x563e('‮56')],_0x9b99ba[_0x563e('‮56')])){$[_0x563e('‮57')](e);}else{$[_0x563e('‫58')](_0x583e0a,(_0x2024e2,_0x3db992,_0x551991)=>{var _0x42b761={'\x7a\x57\x44\x4c\x73':_0x9b99ba[_0x563e('‮59')]};if(_0x9b99ba[_0x563e('‫5a')](_0x9b99ba[_0x563e('‮5b')],_0x9b99ba[_0x563e('‫5c')])){console[_0x563e('‫7')](_0x42b761[_0x563e('‫5d')]);}else{try{if(_0x2024e2){$[_0x563e('‫7')](_0x2024e2);}else{if(_0x551991){console[_0x563e('‫7')](_0x551991);_0x551991=JSON[_0x563e('‫a')](_0x551991);if(_0x9b99ba[_0x563e('‫5a')](_0x551991[_0x563e('‫5e')],'\x30')){console[_0x563e('‫7')](_0x551991);}}}}catch(_0x12ebfd){$[_0x563e('‫7')](_0x12ebfd);}finally{_0x9b99ba[_0x563e('‮5f')](_0x572d8e);}}});}});}function checkCookie(){var _0x3a5f44={'\x51\x63\x6f\x56\x6c':function(_0x31b53e,_0x4d05b5){return _0x31b53e===_0x4d05b5;},'\x41\x75\x44\x62\x77':_0x563e('‮60'),'\x7a\x61\x46\x4f\x64':_0x563e('‫61'),'\x61\x59\x77\x6c\x47':function(_0x216653){return _0x216653();},'\x6a\x61\x44\x4d\x63':_0x563e('‮62'),'\x4f\x74\x59\x78\x66':function(_0x21654c,_0x3df404){return _0x21654c!==_0x3df404;},'\x6b\x54\x51\x4e\x6a':_0x563e('‫63'),'\x4a\x61\x4d\x41\x7a':_0x563e('‫64'),'\x50\x70\x4d\x65\x46':_0x563e('‫65'),'\x65\x6e\x45\x61\x53':_0x563e('‫66'),'\x73\x41\x4e\x58\x64':function(_0xa9019d,_0x3bb0dc){return _0xa9019d===_0x3bb0dc;},'\x64\x4f\x51\x68\x4d':_0x563e('‮67'),'\x78\x4e\x46\x43\x54':_0x563e('‮68'),'\x70\x6b\x58\x67\x74':_0x563e('‮69'),'\x61\x62\x52\x6a\x47':_0x563e('‫6a'),'\x66\x70\x44\x46\x61':_0x563e('‫6b'),'\x65\x66\x65\x59\x52':_0x563e('‫6c'),'\x51\x61\x4a\x57\x71':_0x563e('‮48'),'\x69\x4f\x76\x76\x65':_0x563e('‫6d'),'\x45\x54\x77\x52\x6c':_0x563e('‫6e'),'\x73\x78\x58\x51\x42':_0x563e('‮6f'),'\x55\x76\x43\x73\x5a':_0x563e('‮4b')};const _0x114da6={'\x75\x72\x6c':_0x3a5f44[_0x563e('‮70')],'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x3a5f44[_0x563e('‮71')],'Accept':_0x3a5f44[_0x563e('‫72')],'Connection':_0x3a5f44[_0x563e('‫73')],'Cookie':cookie,'User-Agent':_0x3a5f44[_0x563e('‮74')],'Accept-Language':_0x3a5f44[_0x563e('‫75')],'Referer':_0x3a5f44[_0x563e('‫76')],'Accept-Encoding':_0x3a5f44[_0x563e('‫77')]}};return new Promise(_0x3be282=>{var _0x5c0714={'\x70\x79\x77\x6c\x7a':function(_0x1667aa,_0xd1af15){return _0x3a5f44[_0x563e('‫78')](_0x1667aa,_0xd1af15);},'\x4e\x79\x48\x53\x53':_0x3a5f44[_0x563e('‮79')],'\x54\x48\x49\x71\x58':function(_0x5619,_0x579cdc){return _0x3a5f44[_0x563e('‫78')](_0x5619,_0x579cdc);},'\x66\x50\x73\x46\x70':_0x3a5f44[_0x563e('‫7a')],'\x59\x63\x51\x45\x69':function(_0x19614b){return _0x3a5f44[_0x563e('‮7b')](_0x19614b);},'\x47\x73\x6c\x50\x41':_0x3a5f44[_0x563e('‮7c')],'\x4e\x67\x42\x79\x54':function(_0x2a8708,_0x1ec081){return _0x3a5f44[_0x563e('‫78')](_0x2a8708,_0x1ec081);},'\x59\x67\x69\x61\x64':function(_0x593eb7,_0x1aba9d){return _0x3a5f44[_0x563e('‫7d')](_0x593eb7,_0x1aba9d);},'\x79\x56\x51\x75\x56':_0x3a5f44[_0x563e('‮7e')],'\x44\x43\x63\x57\x71':_0x3a5f44[_0x563e('‫7f')],'\x52\x4c\x63\x53\x74':function(_0x480ecf,_0x4aa869){return _0x3a5f44[_0x563e('‫78')](_0x480ecf,_0x4aa869);},'\x73\x66\x4c\x45\x4c':_0x3a5f44[_0x563e('‮80')],'\x70\x73\x61\x62\x43':_0x3a5f44[_0x563e('‮81')],'\x5a\x77\x4b\x73\x58':function(_0x512d4c,_0x580297){return _0x3a5f44[_0x563e('‫82')](_0x512d4c,_0x580297);},'\x51\x71\x55\x50\x56':_0x3a5f44[_0x563e('‫83')]};if(_0x3a5f44[_0x563e('‫7d')](_0x3a5f44[_0x563e('‮84')],_0x3a5f44[_0x563e('‮85')])){$[_0x563e('‫86')](_0x114da6,(_0x3cd356,_0x552f5f,_0x388c95)=>{var _0x3cb71f={'\x79\x4f\x65\x76\x4d':function(_0x46137b){return _0x5c0714[_0x563e('‮87')](_0x46137b);}};try{if(_0x3cd356){if(_0x5c0714[_0x563e('‮88')](_0x5c0714[_0x563e('‫89')],_0x5c0714[_0x563e('‫89')])){$[_0x563e('‮57')](_0x3cd356);}else{$[_0x563e('‮3b')]();}}else{if(_0x388c95){_0x388c95=JSON[_0x563e('‫a')](_0x388c95);if(_0x5c0714[_0x563e('‫8a')](_0x388c95[_0x563e('‮8b')],_0x5c0714[_0x563e('‫8c')])){if(_0x5c0714[_0x563e('‮8d')](_0x5c0714[_0x563e('‫8e')],_0x5c0714[_0x563e('‫8f')])){$[_0x563e('‫20')]=![];return;}else{cookiesArr[_0x563e('‮3')](jdCookieNode[item]);}}if(_0x5c0714[_0x563e('‫8a')](_0x388c95[_0x563e('‮8b')],'\x30')&&_0x388c95[_0x563e('‮90')][_0x563e('‮91')](_0x5c0714[_0x563e('‮92')])){$[_0x563e('‮29')]=_0x388c95[_0x563e('‮90')][_0x563e('‫61')][_0x563e('‮93')][_0x563e('‫94')];}}else{if(_0x5c0714[_0x563e('‮95')](_0x5c0714[_0x563e('‮96')],_0x5c0714[_0x563e('‮96')])){$[_0x563e('‫7')](_0x5c0714[_0x563e('‫97')]);}else{_0x388c95=JSON[_0x563e('‫a')](_0x388c95);if(_0x5c0714[_0x563e('‮98')](_0x388c95[_0x563e('‮8b')],_0x5c0714[_0x563e('‫8c')])){$[_0x563e('‫20')]=![];return;}if(_0x5c0714[_0x563e('‮88')](_0x388c95[_0x563e('‮8b')],'\x30')&&_0x388c95[_0x563e('‮90')][_0x563e('‮91')](_0x5c0714[_0x563e('‮92')])){$[_0x563e('‮29')]=_0x388c95[_0x563e('‮90')][_0x563e('‫61')][_0x563e('‮93')][_0x563e('‫94')];}}}}}catch(_0x25512d){$[_0x563e('‮57')](_0x25512d);}finally{if(_0x5c0714[_0x563e('‮99')](_0x5c0714[_0x563e('‮9a')],_0x5c0714[_0x563e('‮9a')])){_0x5c0714[_0x563e('‮87')](_0x3be282);}else{_0x3cb71f[_0x563e('‮9b')](_0x3be282);}}});}else{$[_0x563e('‮29')]=data[_0x563e('‮90')][_0x563e('‫61')][_0x563e('‮93')][_0x563e('‫94')];}});};_0xodK='jsjiami.com.v6';
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }