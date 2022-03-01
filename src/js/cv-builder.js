import $ from "jquery";
import { parseISO } from 'date-fns'
import { parse, ParseResult } from "papaparse"
import cv from '../../csv/cv.csv'

/**
 * @typedef {Object} CVCard
 * @property {string} start
 * @property {string} end
 * @property {string} company
 * @property {string} role
 * @property {string} technologies
 * @property {string} project1
 * @property {string} project2
 */

const buildCV = async () => {
  parse(cv, {
    header: true,
    download: true,
    /**
     * @param  {ParseResult<CVCard>} parseResult
     * @param  parseResult.data
     * @param  parseResult.errors
     * @param  parseResult.meta
     */
    complete: ({ data, errors, meta }) => {
      if (errors.length) {
        console.warn(meta)
        console.error(errors)
      }

      Object.values(data).forEach((card, index) => {
        const { company, role, start, end, technologies, project1, project2 } = card
        // Check if date is in ISO standard
        try {
          parseISO(start)
          parseISO(end)
        } catch (error) {
          console.error(error)
        }

        $('#interactive-cv')
          .append(
            $("<div/>")
              .addClass('flip-card')
              .attr("id", index)
              .attr(index === 0 ? { "style": "display:inline" } : {})
              .append(
                $("<div/>")
                  .addClass('flip-card-inner')
                  .append($("<div/>").addClass('flip-card-front')
                    .append($("<h1/>").text(company))
                    .append($("<h2/>").text(role))
                  )
                  .append($("<div/>").addClass('flip-card-back')
                    .append($("<h2/>").text('Projects'))
                    .append($("<p/>").text(project1))
                    .append($("<br/>").text(technologies))
                    .append($("<p/>").text(project2))
                    .append($("<h2/>").text('Technologies'))
                    .append($("<p/>").text(technologies))
                  )
              )
          )
        $('#clickable-timeline')
          .append($('<li/>')
            .addClass('timeline-item')
            .append($('<button/>')
              .addClass('timeline-link-item')
              .attr('id', index)
              .text(`${card.start} - ${card.end}`)
            )
          )
      })
      $.each($('.timeline-link-item'), (index, button) => {
        // Ignore empty data
        $(button).on('click', (element) => {
          $.each($('.flip-card'), (index, card) => {
            if ($(card).attr("id") === $(element.target).attr("id")) {
              $(card).css("display", "inline");
              $(card).addClass("slide-in-fwd-center");
            } else {
              $(card).css("display", "none");
            }
          })
        });
      })
    }
  });
}

export default buildCV