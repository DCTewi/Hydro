jest.mock('hydrooj/src/loader');
import * as lib from '@hydrooj/geoip/lib';

describe('geoip', () => {
    test('MD5', () => {
        expect(lib.lookup('127.0.0.1', 'zh_CN')).toStrictEqual({});
        expect(lib.lookup('1.1.1.1', 'zh-CN').display).toStrictEqual('大洋洲 澳大利亚');
    });
});
