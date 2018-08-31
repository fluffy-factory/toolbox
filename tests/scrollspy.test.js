import test from 'ava';
import {createLinks, createTargets, createOnceElement} from './helpers/create-elements';
import {Scrollspy} from '../src/js/modules/Scrollspy';

test('stockTargetsNodes() ', t => {
  createLinks(3, '#target-');
  createTargets(3, 'target-');
  let a = document.querySelectorAll('a[href^="#target-"]');
  let div = document.querySelectorAll('.target');
  let targets = [...div];

  const s = new Scrollspy({
    navLinks: a,
    activeClass: 'is-active',
    activeZoneOffset: 0,
    activeCallback: null,
    notActiveCallback: null
  });

  let targetsNodes = s.stockTargetsNodes(s.navLinks);

  t.deepEqual(targets, targetsNodes);

});

test('inActiveArea()', t => {
  const scrollspy = new Scrollspy({
    navLinks: [],
    activeClass: 'is-active',
    activeZoneOffset: 0,
    activeCallback: null,
    notActiveCallback: null
  });

  let notInView = Scrollspy.inActiveArea(0, {start: 100, end: 300});
  let inView = Scrollspy.inActiveArea(150, {start: 100, end: 300});

  t.false(notInView);
  t.true(inView);
});

test('execCallback()', t => {
  createLinks(2, '#target-');
  createTargets(2, 'target-');

  let a = document.querySelectorAll('a[href^="#target-"]');
  let div = document.querySelectorAll('.target');
  let targets = [...div];

  const s = new Scrollspy({
    navLinks: a,
    activeClass: 'is-active',
    activeZoneOffset: 0,
    activeCallback: ({link, target}) => {
      t.is(s.navLinks[0], link);
      t.is(s.targets[0], target);
    },
    notActiveCallback: null
  });
  s.init();
  //s.stockTargetsNodes(s.navLinks);
  s.execCallback(s.activeCallback, {link: s.navLinks[0], target: s.targets[0]});
});