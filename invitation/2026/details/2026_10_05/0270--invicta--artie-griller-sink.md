### Roster Details<br />
Team Name: Invicta<br />
Roster: artie, Griller, SinK<br />
Global Rank: [270](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [181]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  610.4<br />
<br />
Final Rank Value (610.4) = Starting Rank Value (620.5) + Head To Head Adjustments (-10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.5
- 400 + ( ( 0.110 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 620.5


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
|            6 |     3637 | 2026-06-12 | ex-Sashi Academy | L   | 0.434      | -            | -                | -                | -         |    -5.14 | artie, Griller, Meldola, SinK, vigg0 |
|            5 |     3643 | 2026-06-12 | Washed           | L   | 0.434      | -            | -                | -                | -         |    -4.47 | artie, Griller, Meldola, SinK, vigg0 |
|            4 |     4233 | 2026-05-23 | Strael Bora      | L   | 0.301      | -            | -                | -                | -         |    -2.99 | artie, Griller, SinK, slize, Teelz   |
|            3 |     4246 | 2026-05-23 | STATE            | L   | 0.300      | -            | -                | -                | -         |    -1.53 | artie, Griller, SinK, slize, Teelz   |
|            2 |     4269 | 2026-05-23 | Fortress         | W   | 0.298      | 0.341        | 0.001 (0.000)    | 0.149 (0.015)    | 1 (0.298) |     6.02 | artie, Griller, SinK, slize, Teelz   |
|            1 |     5217 | 2026-04-25 | Sashi Academy    | L   | 0.115      | -            | -                | -                | -         |    -1.99 | artie, Griller, SinK, vigg0, Viggo   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($347.92)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.441 | $789.00        | $347.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
