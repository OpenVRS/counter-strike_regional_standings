### Roster Details<br />
Team Name: Mindfreak (Australian team)<br />
Roster: swerzieN, Texta, tucks, zune<br />
Global Rank: [266](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [33]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  621.2<br />
<br />
Final Rank Value (621.2) = Starting Rank Value (607.6) + Head To Head Adjustments (13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.209[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 607.6
- 400 + ( ( 0.109 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 607.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.022
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3972 | 2026-02-26 | THUNDERdOWNUNDER   | L   | 0.575      | -            | -                | -                | -         |    -0.66 | Crunchy, sliimey, Texta, tucks, zune |
|            6 |     3976 | 2026-02-26 | Team Abyssal       | W   | 0.575      | 0.769        | 0.005 (0.002)    | 0.275 (0.122)    | 0 (0.000) |    11.76 | Crunchy, sliimey, Texta, tucks, zune |
|            5 |     5984 | 2025-12-13 | THUNDERdOWNUNDER   | L   | 0.076      | -            | -                | -                | -         |    -0.09 | dpr, swerzieN, Texta, tucks, zune    |
|            4 |     5999 | 2025-12-12 | Ground Zero Gaming | W   | 0.068      | 0.303        | 0.008 (0.000)    | 0.256 (0.005)    | 0 (0.000) |     1.86 | dpr, swerzieN, Texta, tucks, zune    |
|            3 |     6120 | 2025-12-05 | Ding Cuts          | W   | 0.023      | 0.303        | 0.001 (0.000)    | 0.139 (0.001)    | 0 (0.000) |     0.39 | Jay, swerzieN, Texta, tucks, zune    |
|            2 |     6122 | 2025-12-05 | THUNDERdOWNUNDER   | L   | 0.022      | -            | -                | -                | -         |    -0.03 | dpr, swerzieN, Texta, tucks, zune    |
|            1 |     6125 | 2025-12-05 | Ding Cuts          | W   | 0.021      | 0.303        | 0.001 (0.000)    | 0.139 (0.001)    | 0 (0.000) |     0.35 | dpr, swerzieN, Texta, tucks, zune    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100.75)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-13 |      0.076 | $1,331.00      | $100.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
