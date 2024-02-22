import './Dashboard.css';
import React from 'react';
import DataWidget from './DataWidget';
import GraphWidget from './GraphWidget';
import SummaryWidget from './SummaryWidget';
import widgetsData from './widgets.json';

const renderWidget = (widget) => {
  const { title, order, data_description, graph_description, summary_description,key } = widget;


  if (order && Array.isArray(order)) {
    return (
      <div key={title} className={"dashboard-"+key} >
        {order.map((widgetOrder) => {
          switch (widgetOrder) {
            case 1:
              return data_description && <DataWidget no={key} title={title} data={data_description} />;
            case 2:
              return graph_description && <GraphWidget no={key} title={title} data={graph_description} />;
            case 3:
              return summary_description && <SummaryWidget no={key} title={title} data={summary_description} />;
            default:
              return null;
          }
        })}
      </div>
    );
  } else {
    return (
      <div key={title} className={"dashboard-"+key} >
        {data_description && <DataWidget title={title} data={data_description} />}
        {graph_description && <GraphWidget title={title} data={graph_description} />}
        {summary_description && <SummaryWidget title={title} data={summary_description} />}
      </div>
    );
  }
}

const Dashboard = () => {
  return (
    <div className="dashboard1">
      {Array.isArray(widgetsData) ? (
        widgetsData.map((widget, index) => (
          renderWidget(widget)
        ))
      ) : (
        <p>Error: Widgets data is not an array.</p>
      )}
    </div>
  );
}

export default Dashboard;
