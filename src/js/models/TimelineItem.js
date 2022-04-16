import $ from "jquery";
import { parseISO } from 'date-fns'

/**
 * Describes a TimelineItem
 * @class
 */
export class TimelineItem {
  timeLineItem = $('<li/>')
  /**
 * @constructs TimelineItem
 * @param  {number} index
 * @param  {JQuery} start
 * @param  {JQuery} end
 */
  constructor(
    index,
    start,
    end,
  ) {

    // Check if date is in ISO standard
    try {
      parseISO(start)
      parseISO(end)
    } catch (error) {
      throw (error)
    }

    this.timeLineItem.on('mouseenter', (element) => {
      $('.flip-card-show').removeClass('flip-card-show')
      if (element.target.nodeName === 'LI')
        $('.timeline-item-hover').removeClass('timeline-item-hover')
      $('#card-' + index)
        .addClass('flip-card-show')
        .addClass("slide-in-fwd-center")
      if (element.target.nodeName === 'LI')
        $(element.target).addClass('timeline-item-hover')
    })
      .addClass('timeline-item')
      .attr('id', `timeline-item-'${index}`)
      .append(start)
      .append(end)
  }
  /**
   * @function getTimelineItem 
   * @memberof TimelineItem
   * @returns {JQuery<HTMLElement>} The timelineItem itself
   */
  get getTimelineItem() {
    return this.timeLineItem;
  }
}