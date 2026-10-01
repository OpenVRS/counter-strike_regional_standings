### Roster Details<br />
Team Name: Invicta<br />
Roster: artie, Griller, SinK<br />
Global Rank: [276](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [182]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  618.1<br />
<br />
Final Rank Value (618.1) = Starting Rank Value (631.8) + Head To Head Adjustments (-13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.8
- 400 + ( ( 0.122 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 631.8


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
|            6 |     2257 | 2026-06-12 | ex-Sashi Academy | L   | 0.619      | -            | -                | -                | -         |    -7.42 | artie, Griller, Meldola, SinK, vigg0 |
|            5 |     2263 | 2026-06-12 | Washed           | L   | 0.618      | -            | -                | -                | -         |    -5.48 | artie, Griller, Meldola, SinK, vigg0 |
|            4 |     2853 | 2026-05-23 | Strael Bora      | L   | 0.485      | -            | -                | -                | -         |    -4.09 | artie, Griller, SinK, slize, Teelz   |
|            3 |     2866 | 2026-05-23 | STATE            | L   | 0.484      | -            | -                | -                | -         |    -2.07 | artie, Griller, SinK, slize, Teelz   |
|            2 |     2889 | 2026-05-23 | Fortress         | W   | 0.483      | 0.341        | 0.002 (0.000)    | 0.208 (0.034)    | 1 (0.483) |    10.08 | artie, Griller, SinK, slize, Teelz   |
|            1 |     3837 | 2026-04-25 | Sashi Academy    | L   | 0.299      | -            | -                | -                | -         |    -4.68 | artie, Griller, SinK, vigg0, Viggo   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($493.49)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.625 | $789.00        | $493.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
