### Roster Details<br />
Team Name: Strael Bora<br />
Roster: AdaMmMm, levantino, maddeN, newhope, svn<br />
Global Rank: [217](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [153]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  691.6<br />
<br />
Final Rank Value (691.6) = Starting Rank Value (764.2) + Head To Head Adjustments (-72.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.264[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 764.2
- 400 + ( ( 0.182 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 764.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1282 | 2026-09-07 | Fire Flux            | L   | 1.000      | -            | -                | -                | -         |    -9.88 | AdaMmMm, levantino, maddeN, newhope, svn |
|           14 |     1330 | 2026-09-06 | megoshort            | L   | 1.000      | -            | -                | -                | -         |   -14.95 | AdaMmMm, levantino, maddeN, newhope, svn |
|           13 |     1623 | 2026-08-30 | Fire Flux            | L   | 0.961      | -            | -                | -                | -         |   -10.05 | AdaMmMm, levantino, maddeN, newhope, svn |
|           12 |     1647 | 2026-08-30 | Inner Circle Academy | L   | 0.960      | -            | -                | -                | -         |    -4.29 | AdaMmMm, levantino, maddeN, newhope, svn |
|           11 |     2064 | 2026-08-18 | Misa                 | L   | 0.881      | -            | -                | -                | -         |   -10.60 | AdaMmMm, levantino, maddeN, newhope, svn |
|           10 |     2075 | 2026-08-18 | The Last Resort      | L   | 0.880      | -            | -                | -                | -         |    -6.67 | AdaMmMm, levantino, maddeN, newhope, svn |
|            9 |     2925 | 2026-07-19 | Julie&Cie            | L   | 0.681      | -            | -                | -                | -         |   -10.28 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|            8 |     2931 | 2026-07-19 | Citronnade           | W   | 0.680      | 0.299        | 0.001 (0.000)    | 0.023 (0.005)    | 1 (0.680) |     5.38 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|            7 |     2938 | 2026-07-19 | Citron               | W   | 0.679      | 0.299        | 0.000 (0.000)    | 0.023 (0.005)    | 1 (0.679) |     3.23 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|            6 |     2945 | 2026-07-19 | Myth                 | W   | 0.679      | 0.299        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.679) |     2.65 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|            5 |     2952 | 2026-07-19 | Julie&Cie            | L   | 0.678      | -            | -                | -                | -         |   -10.70 | 5 Star, AdaMmMm, maddeN, newhope, Wumbo  |
|            4 |     4216 | 2026-05-24 | Fortress             | L   | 0.305      | -            | -                | -                | -         |    -5.31 | 5 Star, AdaMmMm, maddeN, newhope, svn    |
|            3 |     4233 | 2026-05-23 | Invicta              | W   | 0.301      | 0.341        | 0.001 (0.000)    | 0.010 (0.001)    | 1 (0.301) |     2.99 | 5 Star, AdaMmMm, maddeN, newhope, svn    |
|            2 |     4253 | 2026-05-23 | Trainwrecks          | W   | 0.299      | 0.341        | 0.000 (0.000)    | 0.026 (0.003)    | 1 (0.299) |     1.35 | 5 Star, AdaMmMm, maddeN, newhope, svn    |
|            1 |     4267 | 2026-05-23 | ex-Sashi Academy     | L   | 0.299      | -            | -                | -                | -         |    -5.44 | 5 Star, AdaMmMm, maddeN, newhope, svn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,369.93)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-19 |      0.681 | $1,487.00      | $1,012.78       |
| 2026-05-24 |      0.307 | $1,162.00      | $357.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
