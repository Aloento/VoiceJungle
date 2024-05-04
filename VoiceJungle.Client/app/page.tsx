"use client";

import { Line, Liquid } from "@ant-design/charts";
import { ProCard, Statistic, StatisticCard } from "@ant-design/pro-components";

function Dashboard() {
  return (
    <ProCard bordered ghost>
      <ProCard split="horizontal">
        <ProCard split="horizontal">
          <ProCard split="vertical">
            <StatisticCard
              statistic={{
                title: "Yesterday's Full Traffic",
                value: 234,
                description: (
                  <Statistic
                    title="Average traffic for the month"
                    value="8.04%"
                    trend="down"
                  />
                ),
              }}
            />

            <StatisticCard
              statistic={{
                title: "Cumulative Traffic for the Month",
                value: 234,
                description: (
                  <Statistic title="Month-over-month" value="8.04%" trend="up" />
                ),
              }}
            />
          </ProCard>

          <ProCard split="vertical">
            <StatisticCard
              statistic={{
                title: "Running Experiment",
                value: "12/56",
                suffix: "unit",
              }}
            />

            <StatisticCard
              statistic={{
                title: "Total Historical Experiments",
                value: "134",
                suffix: "unit",
              }}
            />
          </ProCard>
        </ProCard>

        <StatisticCard
          title="Traffic Trend"
          chart={
            <Line
              width={600}
              yField={"value"}
              xField={"date"}
              data={[
                { date: "2023-06-23", value: 3 },
                { date: "2023-06-24", value: 4 },
                { date: "2023-06-25", value: 3.5 },
                { date: "2023-06-26", value: 5 },
                { date: "2023-06-27", value: 4.9 },
                { date: "2023-06-28", value: 6 },
                { date: "2023-06-29", value: 7 },
                { date: "2023-06-30", value: 9 },
              ]}
              point={{ shapeField: "square", sizeField: 4 }}
              interaction={{ tooltip: false }}
            />
          }
        />
      </ProCard>

      <StatisticCard
        title="Traffic Usage"
        chart={
          <Liquid
            width={600}
            percent={0.3}
            style={{
              outlineBorder: 4,
              outlineDistance: 8,
              waveLength: 128,
            }}
          />
        }
      />
    </ProCard>
  );
}

export default Dashboard;
