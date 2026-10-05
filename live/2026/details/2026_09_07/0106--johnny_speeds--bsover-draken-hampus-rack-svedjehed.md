### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bsover, draken, hampus, Rack, Svedjehed<br />
Global Rank: [106](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [79]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  911.0<br />
<br />
Final Rank Value (911.0) = Starting Rank Value (873.2) + Head To Head Adjustments (37.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.326[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 873.2
- 400 + ( ( 0.249 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 873.2


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
|            5 |     1065 | 2026-08-05 | Betclic   | L   | 0.977      | -            | -                | -                | -         |    -2.51 | bsover, draken, hampus, Rack, Svedjehed |
|            4 |     1088 | 2026-08-04 | G2 Ares   | W   | 0.969      | 0.450        | 0.014 (0.006)    | 0.686 (0.299)    | 1 (0.969) |    17.88 | bsover, draken, hampus, Rack, Svedjehed |
|            3 |     1099 | 2026-08-03 | Metizport | W   | 0.965      | 0.450        | 0.021 (0.009)    | 0.586 (0.255)    | 1 (0.965) |    22.34 | bsover, draken, hampus, Rack, Svedjehed |
|            2 |     1108 | 2026-08-03 | Lilmix    | W   | 0.964      | 0.450        | 0.001 (0.000)    | 0.264 (0.115)    | 1 (0.964) |     7.30 | bsover, draken, hampus, Rack, Svedjehed |
|            1 |     1112 | 2026-08-03 | Metizport | L   | 0.963      | -            | -                | -                | -         |    -7.18 | bsover, draken, hampus, Rack, Svedjehed |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,873.03)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-05 |      0.979 | $6,000.00      | $5,873.03       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
