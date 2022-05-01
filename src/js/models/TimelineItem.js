import { isValid, parseISO } from 'date-fns'

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

    this.isValidDateString(start.text())
    this.isValidDateString(end.text())

    this.timeLineItem.on('mouseenter', (element) => {
      $('.flip-card-show').removeClass('flip-card-show')
      if (element.target.nodeName === 'SPAN') {
        console.log($(element.target).parent())
        $(element.target).parent().removeClass('timeline-item-hover')
      } else {
        $('.timeline-item-hover').removeClass('timeline-item-hover')
      }
      $('#card-' + index)
        .addClass('flip-card-show')
        .addClass("slide-in-fwd-center")
      if (element.target.nodeName === 'SPAN')
      $(element.target).parent().addClass('timeline-item-hover')
      else 
        $(element.target).addClass('timeline-item-hover')
       
    })
      .addClass('timeline-item')
      .attr('id', `timeline-item-${index}`)
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

  /**
   * Checks if a string is a valid ISO standard date
   * @function getTimelineItem 
   * @memberof TimelineItem
   * @param {string} dateString
   */
  isValidDateString(dateString) {
    // Check if date is in ISO standard
    return isValid(parseISO(dateString))
  }
}