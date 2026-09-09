### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bsover, draken, hampus, Rack, Svedjehed<br />
Global Rank: [104](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [78]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  910.6<br />
<br />
Final Rank Value (910.6) = Starting Rank Value (873.0) + Head To Head Adjustments (37.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.325[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 873.0
- 400 + ( ( 0.248 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 873.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1093 | 2026-08-05 | Betclic   | L   | 0.971      | -            | -                | -                | -         |    -2.49 | bsover, draken, hampus, Rack, Svedjehed |
|            4 |     1116 | 2026-08-04 | G2 Ares   | W   | 0.964      | 0.450        | 0.014 (0.006)    | 0.684 (0.297)    | 1 (0.964) |    17.76 | bsover, draken, hampus, Rack, Svedjehed |
|            3 |     1127 | 2026-08-03 | Metizport | W   | 0.960      | 0.450        | 0.020 (0.009)    | 0.586 (0.253)    | 1 (0.960) |    22.18 | bsover, draken, hampus, Rack, Svedjehed |
|            2 |     1136 | 2026-08-03 | Lilmix    | W   | 0.959      | 0.450        | 0.001 (0.000)    | 0.262 (0.113)    | 1 (0.959) |     7.25 | bsover, draken, hampus, Rack, Svedjehed |
|            1 |     1140 | 2026-08-03 | Metizport | L   | 0.958      | -            | -                | -                | -         |    -7.19 | bsover, draken, hampus, Rack, Svedjehed |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,840.24)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-05 |      0.973 | $6,000.00      | $5,840.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
