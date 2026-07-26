### Roster Details<br />
Team Name: SHISHKA<br />
Roster: danistzz, Krad, Norwi, shalfey, yiksrezo<br />
Global Rank: [250](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [162]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  661.5<br />
<br />
Final Rank Value (661.5) = Starting Rank Value (631.6) + Head To Head Adjustments (29.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.6
- 400 + ( ( 0.122 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 631.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.069
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      367 | 2026-06-19 | K27                  | L   | 1.000      | -            | -                | -                | -         |    -1.17 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            4 |      618 | 2026-06-07 | CYBERSHOKE Esports   | W   | 0.964      | 0.143        | 0.019 (0.003)    | 0.583 (0.080)    | 0 (0.000) |    28.12 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            3 |     1330 | 2026-05-17 | Endless Journey      | L   | 0.824      | -            | -                | -                | -         |   -10.10 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            2 |     1355 | 2026-05-16 | CYBERSHOKE Prospects | L   | 0.818      | -            | -                | -                | -         |    -1.70 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            1 |     1407 | 2026-05-14 | Endless Journey      | W   | 0.805      | 0.278        | 0.008 (0.002)    | 0.355 (0.079)    | 0 (0.000) |    14.76 | danistzz, Krad, Norwi, shalfey, yiksrezo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($412.57)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      0.825 | $500.00        | $412.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
