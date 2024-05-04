"use client";

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
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
              width="100%"
            />
          }
        />
      </ProCard>

      <StatisticCard
        title="Traffic Usage"
        chart={
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
            alt="大盘"
            width="100%"
          />
        }
      />
    </ProCard>
  );
}

export default Dashboard;
