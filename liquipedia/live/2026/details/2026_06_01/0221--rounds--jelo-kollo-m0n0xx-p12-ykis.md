### Roster Details<br />
Team Name: ROUNDS<br />
Roster: jelo, Kollo, m0n0xx, p12, ykis<br />
Global Rank: [221](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [139]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  712.3<br />
<br />
Final Rank Value (712.3) = Starting Rank Value (708.6) + Head To Head Adjustments (3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.6
- 400 + ( ( 0.162 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 708.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.066
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      949 | 2026-05-02 | Lilmix                  | L   | 1.000      | -            | -                | -                | -         |   -12.60 | jelo, Kollo, m0n0xx, p12, ykis |
|            4 |      965 | 2026-05-01 | Matrix (Ukrainian team) | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.091 (0.028)    | 1 (1.000) |    12.19 | jelo, Kollo, m0n0xx, p12, ykis |
|            3 |      969 | 2026-05-01 | G2 Ares                 | L   | 1.000      | -            | -                | -                | -         |    -5.27 | jelo, Kollo, m0n0xx, p12, ykis |
|            2 |      974 | 2026-05-01 | SAW                     | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.207 (0.063)    | 1 (1.000) |    19.21 | jelo, Kollo, m0n0xx, p12, ykis |
|            1 |     2543 | 2026-03-27 | Misa Esports            | L   | 0.766      | -            | -                | -                | -         |    -9.87 | jelo, Kollo, m0n0xx, p12, ykis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($779.58)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.780 | $1,000.00      | $779.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
