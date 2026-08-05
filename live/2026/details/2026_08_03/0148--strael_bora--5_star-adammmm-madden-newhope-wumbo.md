### Roster Details<br />
Team Name: Strael Bora<br />
Roster: 5 Star, AdaMmMm, maddeN, newhope, Wumbo<br />
Global Rank: [148](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [107]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  861.5<br />
<br />
Final Rank Value (861.5) = Starting Rank Value (913.1) + Head To Head Adjustments (-51.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.558[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 913.1
- 400 + ( ( 0.265 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 913.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      338 | 2026-07-19 | Julie&Cie     | L   | 1.000      | -            | -                | -                | -         |   -16.14 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|           11 |      344 | 2026-07-19 | Citronnade    | W   | 1.000      | 0.299        | 0.002 (0.000)    | 0.047 (0.014)    | 1 (1.000) |     5.15 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|           10 |      351 | 2026-07-19 | Citron        | W   | 1.000      | 0.299        | 0.000 (0.000)    | 0.047 (0.014)    | 1 (1.000) |     2.97 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|            9 |      358 | 2026-07-19 | Myth          | W   | 1.000      | 0.299        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.12 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|            8 |      365 | 2026-07-19 | Julie&Cie     | L   | 1.000      | -            | -                | -                | -         |   -17.43 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|            7 |     1629 | 2026-05-24 | Fortress      | L   | 0.725      | -            | -                | -                | -         |   -14.62 | 5 Star, AdaMmMm, maddeN, newhope, svn    |
|            6 |     1646 | 2026-05-23 | Invicta       | W   | 0.721      | 0.341        | 0.001 (0.000)    | 0.034 (0.008)    | 1 (0.721) |     4.94 | 5 Star, AdaMmMm, maddeN, newhope, svn    |
|            5 |     1666 | 2026-05-23 | Trainwrecks   | W   | 0.719      | 0.341        | 0.000 (0.000)    | 0.047 (0.012)    | 1 (0.719) |     2.85 | 5 Star, AdaMmMm, maddeN, newhope, svn    |
|            4 |     1680 | 2026-05-23 | Sashi Academy | L   | 0.718      | -            | -                | -                | -         |   -13.95 | 5 Star, AdaMmMm, maddeN, newhope, svn    |
|            3 |     3741 | 2026-03-29 | HAVU          | L   | 0.354      | -            | -                | -                | -         |    -5.93 | 5 Star, Cher1on, Heroic, maddeN, newhope |
|            2 |     3760 | 2026-03-29 | SINQU         | W   | 0.353      | 0.354        | 0.000 (0.000)    | 0.013 (0.002)    | 1 (0.353) |     1.10 | 5 Star, Cher1on, Heroic, maddeN, newhope |
|            1 |     3791 | 2026-03-29 | Sashi         | L   | 0.352      | -            | -                | -                | -         |    -2.66 | 5 Star, Cher1on, Heroic, maddeN, newhope |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,331.90)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-19 |      1.000 | $1,487.00      | $1,487.00       |
| 2026-05-24 |      0.727 | $1,162.00      | $844.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
