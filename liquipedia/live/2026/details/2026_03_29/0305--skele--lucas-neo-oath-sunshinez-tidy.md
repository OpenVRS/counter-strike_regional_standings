### Roster Details<br />
Team Name: Skele<br />
Roster: lucas, neo, Oath, sunshinez, tidy<br />
Global Rank: [305](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_29.md)<br />
Regional Rank: [37]( ../../standings_asia_2026_03_29.md)<br />
<br />
Final Rank Value:  533.5<br />
<br />
Final Rank Value (533.5) = Starting Rank Value (506.6) + Head To Head Adjustments (26.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.6
- 400 + ( ( 0.055 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 506.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.060
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1470 | 2026-02-26 | Mindfreak (Australian team) | L   | 0.989      | -            | -                | -                | -         |    -2.61 | lucas, neo, Oath, sunshinez, tidy |
|            4 |     1554 | 2026-02-24 | Rooster                     | W   | 0.976      | 0.318        | 0.006 (0.002)    | 0.246 (0.076)    | 0 (0.000) |    25.72 | lucas, neo, Oath, sunshinez, tidy |
|            3 |     1592 | 2026-02-23 | THUNDERdOWNUNDER            | L   | 0.969      | -            | -                | -                | -         |    -0.35 | lucas, neo, Oath, sunshinez, tidy |
|            2 |     1814 | 2026-02-19 | Team Abyssal                | L   | 0.943      | -            | -                | -                | -         |    -9.26 | lucas, neo, Oath, sunshinez, tidy |
|            1 |     1879 | 2026-02-18 | Ding Cuts                   | W   | 0.935      | 0.318        | 0.000 (0.000)    | 0.056 (0.017)    | 0 (0.000) |    13.37 | lucas, neo, Oath, sunshinez, tidy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
