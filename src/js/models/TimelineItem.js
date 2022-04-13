import $ from "jquery";
import { parseISO } from 'date-fns'

export class TimelineItem {
  timeLineItem = $('<li/>')
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
      throw(error)
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
  get getTimelineItem() {
    return this.timeLineItem;
  }
}