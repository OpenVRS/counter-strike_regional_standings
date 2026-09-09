### Roster Details<br />
Team Name: Invicta<br />
Roster: artie, Griller, SinK<br />
Global Rank: [280](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [186]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  618.1<br />
<br />
Final Rank Value (618.1) = Starting Rank Value (631.6) + Head To Head Adjustments (-13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.6
- 400 + ( ( 0.122 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 631.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2285 | 2026-06-12 | ex-Sashi Academy | L   | 0.613      | -            | -                | -                | -         |    -7.36 | artie, Griller, Meldola, SinK, vigg0 |
|            5 |     2291 | 2026-06-12 | Washed           | L   | 0.613      | -            | -                | -                | -         |    -5.44 | artie, Griller, Meldola, SinK, vigg0 |
|            4 |     2881 | 2026-05-23 | Strael Bora      | L   | 0.480      | -            | -                | -                | -         |    -4.05 | artie, Griller, SinK, slize, Teelz   |
|            3 |     2894 | 2026-05-23 | STATE            | L   | 0.479      | -            | -                | -                | -         |    -2.06 | artie, Griller, SinK, slize, Teelz   |
|            2 |     2917 | 2026-05-23 | Fortress         | W   | 0.477      | 0.341        | 0.002 (0.000)    | 0.208 (0.034)    | 1 (0.477) |     9.98 | artie, Griller, SinK, slize, Teelz   |
|            1 |     3865 | 2026-04-25 | Sashi Academy    | L   | 0.294      | -            | -                | -                | -         |    -4.61 | artie, Griller, SinK, vigg0, Viggo   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($489.18)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.620 | $789.00        | $489.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
