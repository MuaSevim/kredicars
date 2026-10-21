import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getNeed,normalizePhone } from '../lib/finance';
test('budget arithmetic rejects impossible values and preserves zero',()=>{assert.equal(getNeed(1250000,500000),750000);assert.equal(getNeed(100,101),null);assert.equal(getNeed(100,-1),null);assert.equal(getNeed(0,0),null);assert.equal(getNeed(Infinity,20),null);assert.equal(getNeed(NaN,20),null);assert.equal(getNeed(100,100),0);});
test('Turkish mobile normalization accepts common formats, rejects malformed numbers',()=>{for(const p of ['0542 401 40 04','+90 (542) 401 4004','5424014004'])assert.equal(normalizePhone(p),'+905424014004');for(const p of ['0212 1234567','1234','abc05424014004','054240140040'])assert.equal(normalizePhone(p),null);});
