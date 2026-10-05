### Roster Details<br />
Team Name: SHISHKA<br />
Roster: danistzz, Krad, Norwi, shalfey, yiksrezo<br />
Global Rank: [268](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [179]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  615.6<br />
<br />
Final Rank Value (615.6) = Starting Rank Value (606.2) + Head To Head Adjustments (9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.219[<sup>1</sup>](#table2)
- Bounty Collected: 0.191[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 606.2
- 400 + ( ( 0.103 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 606.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3493 | 2026-06-19 | K27             | L   | 0.479      | -            | -                | -                | -         |    -0.12 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            4 |     3743 | 2026-06-07 | CYBERSHOKE      | W   | 0.400      | 0.384        | 0.004 (0.001)    | 0.123 (0.019)    | 0 (0.000) |     9.22 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            3 |     4454 | 2026-05-17 | Endless Journey | L   | 0.261      | -            | -                | -                | -         |    -3.69 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            2 |     4479 | 2026-05-16 | UPGRADE         | L   | 0.254      | -            | -                | -                | -         |    -0.16 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            1 |     4531 | 2026-05-14 | Endless Journey | W   | 0.241      | 0.278        | 0.001 (0.000)    | 0.087 (0.006)    | 0 (0.000) |     4.16 | danistzz, Krad, Norwi, shalfey, yiksrezo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130.56)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      0.261 | $500.00        | $130.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
