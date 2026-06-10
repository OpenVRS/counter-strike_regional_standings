### Roster Details<br />
Team Name: ROUNDS<br />
Roster: jelo, Kollo, m0n0xx, p12, ykis<br />
Global Rank: [221](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [139]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  708.5<br />
<br />
Final Rank Value (708.5) = Starting Rank Value (705.3) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.195[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.3
- 400 + ( ( 0.159 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 705.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.063
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1059 | 2026-05-02 | Lilmix                  | L   | 0.952      | -            | -                | -                | -         |   -12.09 | jelo, Kollo, m0n0xx, p12, ykis |
|            4 |     1075 | 2026-05-01 | Matrix (Ukrainian team) | W   | 0.948      | 0.303        | 0.000 (0.000)    | 0.088 (0.025)    | 1 (0.948) |    11.57 | jelo, Kollo, m0n0xx, p12, ykis |
|            3 |     1079 | 2026-05-01 | G2 Ares                 | L   | 0.948      | -            | -                | -                | -         |    -5.21 | jelo, Kollo, m0n0xx, p12, ykis |
|            2 |     1084 | 2026-05-01 | SAW                     | W   | 0.948      | 0.303        | 0.001 (0.000)    | 0.198 (0.057)    | 1 (0.948) |    17.87 | jelo, Kollo, m0n0xx, p12, ykis |
|            1 |     2653 | 2026-03-27 | Misa Esports            | L   | 0.714      | -            | -                | -                | -         |    -8.95 | jelo, Kollo, m0n0xx, p12, ykis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($727.31)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.727 | $1,000.00      | $727.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
