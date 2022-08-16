export default class ColumnChart {
  subElements = {};
  chartHeight = 50;
  constructor({
    data = [],
    label = "",
    value = 0,
    link = "",
    formatHeading = function (data) {
      return data;
    },
  } = {}) {
    this.data = data;
    this.label = label;
    this.value = formatHeading(value);
    this.link = link;
    this.renderBlock();
  };
  renderBlock() {
    let block = `
    <div class="column-chart" style="--chart-height: 50">
        <div class="column-chart__title">
         Total ${this.label}
         ${this.renderLink()}
        </div>
        <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
          ${this.renderColumn()}
        </div>
        </div>
    </div>
    `;
    const blockWrapper = document.createElement("div");
    blockWrapper.innerHTML = block;
    this.element = blockWrapper.firstElementChild;
    if (!this.data.length) {
      this.element.classList.add("column-chart_loading");
    }
    this.subElements = this.getSubElements();
  }
  renderLink() {
    if (this.link) {
      return `<a class="column-chart__link" href="${this.link}" >View all</a>`;
    }
    else {
      return "";
    }
  }
  renderColumn() {
    const maxValue = Math.max(...this.data);
    const scale = this.chartHeight / maxValue;

    return this.data.map(item => {
      const percent = ((item / maxValue) * 100).toFixed(0);

      return `<div style="--value: ${Math.floor(
        item * scale
      )}" data-tooltip="${percent}%"></div>`;
    })
      .join("");
  }

  getSubElements() {
    const result = {};
    const elements = this.element.querySelectorAll("[data-element]");

    for (const subElement of elements) {
      const name = subElement.dataset.element;

      result[name] = subElement;
    }

    return result;
  }

  update(data) {
    this.data = data;
    this.subElements.body.innerHTML = this.renderColumn();
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
    this.subElements = {};
  }
}
