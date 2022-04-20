import {TimelineItem} from '../TimelineItem'

import jq from "jquery";
import { Project } from '../Project';

var jsdom = require('jsdom');

const $ = jq(new jsdom.JSDOM().window);

describe('TimelineItem', () => {
  test('isValidDateString', () => {
    const start = $('<span/>')
    const end = $('<span/>')
    const timelineItem = new TimelineItem(3, start, end)
    expect(timelineItem.isValidDateString('A random string')).toBe(false)
    expect(timelineItem.isValidDateString('2020-01-01')).toBe(true)
  });
  test('constructor', () => {
    const start = $('<span/>').text('2020-01-01').css('border-bottom', '0.1em solid #27a594')
    const end = $('<span/>').text('2020-05-01')
    const timelineItem = new TimelineItem(3, start, end)
    expect(timelineItem.timeLineItem.attr('class')).toBe('timeline-item')
    expect(timelineItem.timeLineItem.attr('id')).toBe("timeline-item-'3")
  });
})
